// scripts/fetch-boe.mjs
//
// Descarga el sumario diario del BOE (API oficial y gratuita, sin API key)
// y extrae únicamente los anuncios de la sección "II.B. Oposiciones y concursos".
//
// Uso:
//   node scripts/fetch-boe.mjs                -> descarga el sumario de HOY
//   node scripts/fetch-boe.mjs 20260910        -> descarga el sumario de esa fecha
//   node scripts/fetch-boe.mjs 20260901 20260910  -> descarga un rango de fechas (backfill)
//
// Fuente oficial: https://www.boe.es/datosabiertos/api/api.php

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { detectarComunidad, detectarAmbito } from "./comunidades.mjs";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "oposiciones.json");

// -------------------- utilidades --------------------

function toArray(x) {
  if (x === undefined || x === null) return [];
  return Array.isArray(x) ? x : [x];
}

function fechaISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

function hoyEnMadrid() {
  // Fecha de hoy en la zona horaria de España (independiente del runner)
  const f = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  return f.replace(/-/g, "");
}

function rangoFechas(desde, hasta) {
  const fechas = [];
  const parse = (s) =>
    new Date(`${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}T00:00:00Z`);
  let cur = parse(desde);
  const fin = parse(hasta);
  while (cur <= fin) {
    fechas.push(fechaISO(cur));
    cur = new Date(cur.getTime() + 24 * 60 * 60 * 1000);
  }
  return fechas;
}

// Detecta categoría a partir del título / departamento, usando palabras clave.
// Esto es lo que le da "valor añadido" al sitio frente a un simple listado plano.
const CATEGORIAS = [
  { id: "policia-guardia-civil", label: "Policía y Guardia Civil", keywords: ["policía nacional", "guardia civil", "policía local", "ertzaintza", "mossos", "cuerpo nacional de policía"] },
  { id: "bomberos", label: "Bomberos", keywords: ["bombero", "bomberos", "extinción de incendios"] },
  { id: "sanidad", label: "Sanidad", keywords: ["enfermer", "médic", "facultativo especialista", "auxiliar de enfermería", "técnico en cuidados auxiliares", "servicio de salud", "sanidad"] },
  { id: "docencia", label: "Docencia y Universidades", keywords: ["profesor", "catedrátic", "docente", "universidad", "cuerpo de maestros", "educación"] },
  { id: "justicia", label: "Justicia", keywords: ["justicia", "letrado de la administración", "tramitación procesal", "auxilio judicial", "instituciones penitenciarias"] },
  { id: "administracion-general", label: "Administración General (AGE)", keywords: ["auxiliar administrativo", "administrativo del estado", "cuerpo general", "gestión de la administración", "agencia tributaria", "seguridad social"] },
  { id: "ayuntamientos", label: "Administración Local (Ayuntamientos)", keywords: ["ayuntamiento", "diputación provincial", "cabildo", "consell insular"] },
  { id: "correos-empresas-publicas", label: "Correos y Empresas Públicas", keywords: ["correos y telégrafos", "renfe", "adif", "empresa pública"] },
  { id: "fuerzas-armadas", label: "Fuerzas Armadas", keywords: ["ejército", "armada", "fuerzas armadas", "militar"] },
  { id: "tecnico-ingenieria", label: "Técnico e Ingeniería", keywords: ["ingenier", "técnico superior", "arquitect"] },
];

function detectarCategoria(texto) {
  const t = texto.toLowerCase();
  for (const cat of CATEGORIAS) {
    if (cat.keywords.some((k) => t.includes(k))) return cat.id;
  }
  return "otros";
}

// Intenta extraer una comunidad autónoma o "Estado" a partir del nombre del departamento.
// -------------------- descarga --------------------

async function descargarSumario(fecha) {
  const url = `https://www.boe.es/datosabiertos/api/boe/sumario/${fecha}`;
  const res = await fetch(url, { headers: { Accept: "application/json" } });

  if (res.status === 404) {
    console.log(`[${fecha}] Sin publicación BOE ese día (404). Se omite.`);
    return [];
  }
  if (!res.ok) {
    console.warn(`[${fecha}] Error HTTP ${res.status} al consultar el BOE.`);
    return [];
  }

  const json = await res.json();
  if (json?.status?.code !== "200") {
    console.log(`[${fecha}] Respuesta sin datos (${json?.status?.text ?? "desconocido"}).`);
    return [];
  }

  const diarios = toArray(json?.data?.sumario?.diario);
  const items = [];

  for (const diario of diarios) {
    const secciones = toArray(diario?.seccion);
    // Código "2B" == "II. Autoridades y personal" - "B. Oposiciones y concursos"
    const seccionOpos = secciones.find((s) => s?.codigo === "2B" || s?.["@codigo"] === "2B");
    if (!seccionOpos) continue;

    const departamentos = toArray(seccionOpos.departamento);
    for (const depto of departamentos) {
      const nombreDepto = depto?.nombre ?? depto?.["@nombre"] ?? "";

      // Los <item> pueden colgar directamente del departamento o de un <epigrafe>
      const itemsDirectos = toArray(depto?.item);
      const epigrafes = toArray(depto?.epigrafe);
      const itemsDeEpigrafes = epigrafes.flatMap((ep) =>
        toArray(ep?.item).map((it) => ({ ...it, __epigrafe: ep?.nombre ?? ep?.["@nombre"] ?? "" }))
      );

      for (const raw of [...itemsDirectos, ...itemsDeEpigrafes]) {
        const titulo = raw?.titulo ?? "";
        const urlPdf = typeof raw?.url_pdf === "string" ? raw.url_pdf : raw?.url_pdf?.texto ?? "";
        const urlHtml = raw?.url_html ?? "";
        const textoCompleto = `${nombreDepto} ${titulo}`;

        items.push({
          id: raw?.identificador,
          fecha_publicacion: `${fecha.slice(0, 4)}-${fecha.slice(4, 6)}-${fecha.slice(6, 8)}`,
          departamento: nombreDepto,
          epigrafe: raw?.__epigrafe ?? "",
          titulo,
          url_pdf: urlPdf,
          url_html: urlHtml,
          categoria: detectarCategoria(textoCompleto),
          ambito: detectarAmbito(textoCompleto),
          comunidad: detectarComunidad(textoCompleto),
        });
      }
    }
  }

  console.log(`[${fecha}] ${items.length} anuncios de oposiciones/concursos encontrados.`);
  return items;
}

// -------------------- almacenamiento --------------------

// Devuelve los registros ya acumulados.
//
// Distingue dos situaciones que ANTES se trataban igual (devolviendo una lista
// vacía), y esa confusión provocó una pérdida silenciosa del histórico: si el
// fichero desaparecía del repositorio, el robot creía que era la primera
// ejecución y volvía a empezar desde cero sin avisar.
//
//   - El fichero no existe (ENOENT): es legítimo solo la primera vez. Se avisa
//     por consola y se continúa con una lista vacía.
//   - El fichero existe pero no se puede leer o no es JSON válido: eso es un
//     error, no un arranque limpio. Se aborta para no sobrescribir datos buenos
//     con un fichero recién creado.
async function cargarExistentes() {
  let raw;
  try {
    raw = await readFile(DATA_FILE, "utf-8");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.warn(
        `AVISO: no existe ${DATA_FILE}. Se asume primera ejecución y se empieza con 0 registros.\n` +
        `       Si esperabas tener histórico acumulado, DETÉN el proceso: el fichero puede haberse\n` +
        `       perdido y esta ejecución lo reemplazaría por uno nuevo con los datos de hoy.`
      );
      return [];
    }
    throw err;
  }

  try {
    const datos = JSON.parse(raw);
    if (!Array.isArray(datos)) throw new Error("el contenido no es una lista");
    return datos;
  } catch (err) {
    throw new Error(
      `${DATA_FILE} existe pero no se ha podido leer (${err.message}). ` +
      `Se aborta para no sobrescribir el histórico con datos incompletos.`
    );
  }
}

// Proporción mínima que debe conservarse respecto al histórico previo. Una
// ejecución normal solo añade registros, así que una caída por debajo de este
// umbral indica que algo ha ido mal (fichero perdido, respuesta parcial del
// BOE, etc.) y no un resultado legítimo.
const UMBRAL_PERDIDA = 0.9;

async function guardar(registros, totalPrevio = 0) {
  // Red de seguridad: nunca sustituir un histórico grande por uno mucho menor.
  if (totalPrevio > 0 && registros.length < totalPrevio * UMBRAL_PERDIDA) {
    throw new Error(
      `Se iban a guardar ${registros.length} registros cuando antes había ${totalPrevio}. ` +
      `Eso supondría perder histórico, así que no se escribe nada. ` +
      `Revisa data/oposiciones.json antes de volver a ejecutar.`
    );
  }

  await mkdir(DATA_DIR, { recursive: true });
  // Orden: más recientes primero
  registros.sort((a, b) => (a.fecha_publicacion < b.fecha_publicacion ? 1 : -1));
  await writeFile(DATA_FILE, JSON.stringify(registros, null, 2), "utf-8");
}

// -------------------- main --------------------

async function main() {
  const [, , argDesde, argHasta] = process.argv;
  const fechas = argDesde
    ? rangoFechas(argDesde, argHasta ?? argDesde)
    : [hoyEnMadrid()];

  const existentes = await cargarExistentes();
  const porId = new Map(existentes.map((r) => [r.id, r]));

  for (const fecha of fechas) {
    const nuevos = await descargarSumario(fecha);
    for (const item of nuevos) {
      if (item.id) porId.set(item.id, item); // dedup / actualiza por identificador oficial
    }
    // pequeña pausa para no machacar la API en backfills largos
    if (fechas.length > 1) await new Promise((r) => setTimeout(r, 300));
  }

  const registros = [...porId.values()];
  await guardar(registros, existentes.length);
  console.log(
    `Total acumulado: ${registros.length} oposiciones/concursos en ${DATA_FILE} ` +
    `(antes había ${existentes.length}).`
  );
}

main().catch((err) => {
  console.error("Error en fetch-boe.mjs:", err);
  process.exit(1);
});
