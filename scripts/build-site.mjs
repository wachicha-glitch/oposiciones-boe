// scripts/build-site.mjs
//
// Genera el sitio estático en /docs a partir de data/oposiciones.json.
// No usa frameworks: HTML plano + un poco de CSS/JS, para que cargue rápido
// (bueno para SEO y para Core Web Vitals).

import { readFile, writeFile, mkdir, cp } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA_FILE = path.join(ROOT, "data", "oposiciones.json");
const DOCS_DIR = path.join(ROOT, "docs");

const SITE_NAME = "Oposiciones BOE Hoy";
const SITE_DESC = "Convocatorias de oposiciones y empleo público publicadas en el BOE, actualizadas automáticamente cada día a partir de la fuente oficial.";
const SITE_URL = "https://TU-DOMINIO-AQUI.example"; // <-- cámbialo cuando tengas dominio

const CATEGORIA_LABELS = {
  "policia-guardia-civil": "Policía y Guardia Civil",
  "bomberos": "Bomberos",
  "sanidad": "Sanidad",
  "docencia": "Docencia y Universidades",
  "justicia": "Justicia",
  "administracion-general": "Administración General (AGE)",
  "ayuntamientos": "Administración Local (Ayuntamientos)",
  "correos-empresas-publicas": "Correos y Empresas Públicas",
  "fuerzas-armadas": "Fuerzas Armadas",
  "tecnico-ingenieria": "Técnico e Ingeniería",
  "otros": "Otras convocatorias",
};

function escapeHtml(s = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatearFecha(iso) {
  const [y, m, d] = iso.split("-");
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  return `${parseInt(d, 10)} de ${meses[parseInt(m, 10) - 1]} de ${y}`;
}

function layout({ title, description, canonical, activeNav, bodyHtml }) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="estilo.css">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="website">
</head>
<body>
<header class="cabecera">
  <div class="contenedor cabecera-inner">
    <a href="index.html" class="logo">${SITE_NAME}</a>
    <button class="menu-toggle" id="menu-toggle" aria-expanded="false" aria-controls="nav-principal">☰ Menú</button>
    <nav class="nav" id="nav-principal">
      <a href="index.html" class="${activeNav === "inicio" ? "activo" : ""}">Inicio</a>
      <a href="todas.html" class="${activeNav === "todas" ? "activo" : ""}">Todas las convocatorias</a>
      <a href="categorias.html" class="${activeNav === "categorias" ? "activo" : ""}">Categorías</a>
      <a href="recursos.html" class="${activeNav === "recursos" ? "activo" : ""}">Recursos</a>
    </nav>
  </div>
</header>
<main class="contenedor">
${bodyHtml}
</main>
<footer class="pie">
  <div class="contenedor">
    <p>Datos obtenidos automáticamente del <a href="https://www.boe.es/datosabiertos/api/api.php" target="_blank" rel="noopener">API de datos abiertos del BOE</a> (Agencia Estatal Boletín Oficial del Estado). Este sitio no es un canal oficial; consulta siempre el <a href="https://www.boe.es" target="_blank" rel="noopener">BOE</a> para el texto legal completo antes de tomar decisiones.</p>
    <p class="pie-links"><a href="aviso-legal.html">Aviso legal</a> · <a href="privacidad.html">Política de privacidad</a> · <a href="recursos.html">Recursos</a> · <a href="guia.html">Guía</a> · <a href="faq.html">FAQ</a> · <a href="glosario.html">Glosario</a> · <a href="boletines.html">Boletines autonómicos</a></p>
  </div>
</footer>
<script src="menu.js"></script>
</body>
</html>`;
}

function tarjeta(item) {
  const cat = CATEGORIA_LABELS[item.categoria] ?? "Otras convocatorias";
  return `<article class="tarjeta" data-categoria="${item.categoria}" data-ambito="${escapeHtml(item.ambito)}">
  <div class="tarjeta-meta">
    <span class="etiqueta">${escapeHtml(cat)}</span>
    <span class="fecha">${item.id} · ${formatearFecha(item.fecha_publicacion)}</span>
  </div>
  <h3 class="tarjeta-titulo" title="${escapeHtml(item.titulo)}">${escapeHtml(item.titulo)}</h3>
  <p class="tarjeta-organismo">${escapeHtml(item.departamento)}${item.ambito ? " · " + escapeHtml(item.ambito) : ""}</p>
  <div class="tarjeta-acciones">
    <a href="${item.url_html}" target="_blank" rel="noopener">Ver texto completo</a>
    <a href="${item.url_pdf}" target="_blank" rel="noopener">Ver PDF oficial</a>
  </div>
</article>`;
}

// ---------- contenido propio (guía, FAQ, legal) ----------
// Este contenido es el que aporta valor real más allá de reproducir el BOE,
// y es también lo que Google exige (privacidad/aviso legal) para aprobar AdSense.

function paginaGuia() {
  return `
<section class="hero">
  <h1>Guía general para preparar una oposición</h1>
  <p>Una introducción práctica al proceso de acceso al empleo público en España, útil tanto si es tu primera convocatoria como si ya llevas tiempo opositando.</p>
</section>
<article class="contenido">
  <h2>¿Qué es una oposición?</h2>
  <p>Es un proceso selectivo que utilizan las administraciones públicas españolas (estatal, autonómica o local) para cubrir plazas de personal funcionario o laboral. A diferencia de un proceso de selección privado, se rige por el principio de igualdad, mérito y capacidad: todas las personas que cumplan los requisitos pueden presentarse, y la plaza se adjudica según el resultado de unas pruebas objetivas.</p>

  <h2>Tipos de proceso selectivo</h2>
  <ul>
    <li><strong>Oposición:</strong> se basa únicamente en superar uno o varios exámenes (temario, supuestos prácticos, pruebas físicas o psicotécnicas según el cuerpo). Es el sistema más habitual en policía, bomberos o cuerpos generales del Estado.</li>
    <li><strong>Concurso:</strong> se valoran méritos (experiencia, formación, idiomas...) sin examen. Es poco frecuente como único sistema salvo en procesos de estabilización de empleo temporal.</li>
    <li><strong>Concurso-oposición:</strong> combina examen y valoración de méritos. Muy habitual en sanidad y docencia.</li>
  </ul>

  <h2>Turno libre, promoción interna y cupo de reserva</h2>
  <p>La mayoría de convocatorias reparten las plazas en distintos turnos de acceso, y es importante fijarse por cuál te presentas:</p>
  <ul>
    <li><strong>Turno libre:</strong> abierto a cualquier persona que cumpla los requisitos generales. Es el turno mayoritario y el que suele tener más plazas.</li>
    <li><strong>Promoción interna:</strong> reservado a quienes ya son personal de la misma administración y quieren ascender de grupo o cuerpo. Suele exigir una antigüedad mínima y, a veces, tiene un temario o número de ejercicios reducido.</li>
    <li><strong>Cupo de reserva para personas con discapacidad:</strong> un porcentaje de las plazas (normalmente en torno al 7%, aunque varía) se reserva a personas que acrediten un grado de discapacidad igual o superior al mínimo exigido, con posibilidad de adaptaciones en las pruebas.</li>
  </ul>

  <h2>Requisitos generales de acceso</h2>
  <p>Aunque cada convocatoria fija los suyos propios, la mayoría de procesos comparten una base común:</p>
  <ul>
    <li>Tener la nacionalidad española, de un Estado miembro de la Unión Europea, o cumplir alguno de los supuestos legales que permiten el acceso a personas de otras nacionalidades.</li>
    <li>Tener cumplida la edad mínima legal y no haber alcanzado la edad de jubilación forzosa.</li>
    <li>Estar en posesión de la titulación académica exigida para el grupo o subgrupo de clasificación de la plaza (por ejemplo, ESO para el subgrupo C2, Bachillerato o FP de grado medio para C1, grado universitario para A1/A2).</li>
    <li>No haber sido separado del servicio de ninguna administración pública mediante expediente disciplinario, ni estar inhabilitado.</li>
    <li>Poseer la capacidad funcional para el desempeño de las tareas del puesto (en cuerpos como policía o bomberos, esto se concreta en un cuadro médico de exclusiones específico).</li>
  </ul>

  <h2>Fases habituales de una convocatoria</h2>
  <ol>
    <li><strong>Publicación de las bases</strong> en el BOE o boletín autonómico correspondiente, donde se detallan requisitos, plazas, temario y calendario orientativo.</li>
    <li><strong>Plazo de presentación de solicitudes</strong>, normalmente de 20 días hábiles desde la publicación.</li>
    <li><strong>Publicación de listas provisionales y definitivas de admitidos</strong>, con posibilidad de subsanar errores en un plazo determinado.</li>
    <li><strong>Realización de las pruebas</strong> (uno o varios ejercicios, según el cuerpo).</li>
    <li><strong>Publicación de resultados y, en su caso, fase de concurso</strong> (valoración de méritos).</li>
    <li><strong>Presentación de documentación y nombramiento</strong> de quienes superan el proceso.</li>
  </ol>

  <h2>Cómo se suele calificar una oposición</h2>
  <p>Cada ejercicio suele tener carácter eliminatorio: si no se alcanza la puntuación mínima (habitualmente 5 sobre 10, o un porcentaje del total), no se puede continuar al siguiente. La nota final combina normalmente la puntuación de los ejercicios de la fase de oposición con la puntuación de méritos de la fase de concurso, si la hay, aunque el peso de cada fase varía mucho de una convocatoria a otra. En caso de empate en la nota final, las bases suelen fijar criterios de desempate (por ejemplo, mejor nota en el primer ejercicio, mayor tiempo de servicio previo, o incluso sorteo público).</p>

  <h2>Bolsas de trabajo y listas de espera</h2>
  <p>Muchas convocatorias de sanidad, educación o administración local generan, además de las plazas fijas, una bolsa de trabajo o lista de espera con las personas que han superado el proceso o parte de él sin obtener plaza. Esa bolsa se utiliza después para cubrir sustituciones o vacantes temporales por orden de puntuación, sin necesidad de un proceso selectivo nuevo cada vez.</p>

  <h2>Cómo hacer seguimiento de una convocatoria</h2>
  <p>Las fechas límite se cuentan siempre desde la fecha de publicación en el boletín oficial, no desde que te enteras de la noticia. Anota en un calendario el día exacto de publicación y cuenta los días hábiles (excluyendo sábados, domingos y festivos) para no perder el plazo de solicitud. Ten en cuenta también que, en procesos con muchas fases, pueden pasar varios meses o incluso más de un año entre la convocatoria inicial y el nombramiento definitivo.</p>

  <h2>Consejos generales de planificación</h2>
  <ul>
    <li>Consigue el temario oficial completo antes de empezar a estudiar; suele figurar como anexo en las propias bases de la convocatoria.</li>
    <li>Divide el temario en bloques y establece un calendario de repaso, no solo de primera lectura: repasar espaciado en el tiempo ayuda más a retener que leer una sola vez con atención.</li>
    <li>Practica con exámenes de convocatorias anteriores del mismo cuerpo cuando estén disponibles públicamente; el formato de pregunta se suele repetir de una edición a otra.</li>
    <li>Revisa los requisitos de titulación, edad o condición física con antelación: algunos trámites (como certificados médicos o de delitos de naturaleza sexual) llevan tiempo en tramitarse.</li>
    <li>Si vas a compaginar la preparación con un trabajo, prioriza la constancia diaria sobre las sesiones maratonianas puntuales.</li>
    <li>Únete a foros o comunidades de personas que se presentan al mismo cuerpo: suelen compartir dudas sobre la interpretación de las bases que no siempre están claras a la primera lectura.</li>
  </ul>

  <p class="aviso-contenido">Esta guía es orientativa y de carácter general. Cada convocatoria tiene sus propias bases específicas, que prevalecen siempre sobre cualquier información general como esta. Consulta el texto íntegro de la convocatoria que te interese antes de tomar decisiones.</p>
</article>`;
}

function paginaFaq() {
  const preguntas = [
    {
      q: "¿Qué significa que una convocatoria se publique en el BOE?",
      a: "El BOE (Boletín Oficial del Estado) es el diario oficial donde se publican las normas y actos con validez legal en España, incluidas las convocatorias de oposiciones de ámbito estatal. La fecha de publicación en el BOE es la que marca el inicio de los plazos oficiales (por ejemplo, para presentar la solicitud), no la fecha en que te enteras de la noticia.",
    },
    {
      q: "¿Las oposiciones autonómicas o locales también salen en el BOE?",
      a: "No siempre. Muchas comunidades autónomas y ayuntamientos publican sus propias convocatorias en su boletín oficial autonómico o provincial (BOJA, BOCM, DOGC, BOP, etc.). El BOE recoge principalmente las convocatorias de ámbito estatal, aunque en ocasiones también se publican extractos de convocatorias autonómicas o locales.",
    },
    {
      q: "¿Es gratis presentarse a una oposición?",
      a: "No siempre. La mayoría de convocatorias exigen el pago de una tasa de inscripción, cuyo importe y forma de pago se especifica en las propias bases. Existen exenciones o reducciones habituales para personas en situación de desempleo, familia numerosa o discapacidad, según cada convocatoria.",
    },
    {
      q: "¿Qué diferencia hay entre lista provisional y lista definitiva de admitidos?",
      a: "La lista provisional es un primer listado que permite comprobar si has sido admitido o excluido, normalmente indicando el motivo de exclusión. Durante un plazo determinado puedes presentar alegaciones o subsanar errores. Tras resolver esas alegaciones se publica la lista definitiva, ya sin posibilidad de subsanación posterior.",
    },
    {
      q: "¿Puedo presentarme a una oposición si no soy español?",
      a: "Depende del cuerpo y de la convocatoria. Con carácter general, los nacionales de la Unión Europea pueden acceder a la mayoría de puestos de la administración pública española, salvo a aquellos que impliquen ejercicio de autoridad pública (por ejemplo, ciertos puestos de las fuerzas y cuerpos de seguridad), donde puede exigirse la nacionalidad española. Revisa siempre el apartado de requisitos de cada convocatoria concreta.",
    },
    {
      q: "¿Qué pasa si encuentro un error en mi solicitud después de enviarla?",
      a: "Las propias bases de la convocatoria establecen un plazo de subsanación, habitualmente asociado a la publicación de la lista provisional de admitidos, en el que puedes corregir errores u omisiones. Fuera de ese plazo, generalmente ya no es posible modificar la solicitud.",
    },
    {
      q: "¿Qué diferencia hay entre oposición, concurso y concurso-oposición?",
      a: "En la oposición solo cuentan los exámenes. En el concurso solo se valoran méritos (experiencia, formación...) sin examen. El concurso-oposición combina ambas cosas, y las bases de cada convocatoria indican qué peso tiene cada fase sobre la nota final.",
    },
    {
      q: "¿Qué es el turno de promoción interna?",
      a: "Es un turno de acceso reservado a personas que ya trabajan en la misma administración y quieren ascender a un grupo o cuerpo superior. Suele exigir una antigüedad mínima en el puesto de origen y, en ocasiones, tiene un proceso selectivo simplificado respecto al turno libre.",
    },
    {
      q: "¿Qué es el cupo de reserva para personas con discapacidad?",
      a: "Es el porcentaje de plazas de cada convocatoria reservado a personas que acrediten un grado de discapacidad igual o superior al mínimo exigido en las bases. Quienes se presentan por este cupo pueden solicitar adaptaciones de tiempo o medios en las pruebas si las necesitan.",
    },
    {
      q: "¿Cuánto tiempo suele durar un proceso selectivo completo?",
      a: "Varía mucho según el cuerpo y el volumen de solicitudes, pero no es raro que pasen entre varios meses y más de un año desde la publicación de la convocatoria hasta el nombramiento definitivo, especialmente si hay varios ejercicios, fase de concurso y periodo de prácticas.",
    },
    {
      q: "¿Qué es una bolsa de trabajo o lista de espera?",
      a: "Es un listado, generado a partir de un proceso selectivo, con las personas que lo han superado (o parte de él) sin llegar a obtener plaza fija. Se usa para cubrir sustituciones o vacantes temporales por orden de puntuación, sin necesidad de convocar un proceso nuevo cada vez que surge una necesidad.",
    },
    {
      q: "¿Puedo presentarme a la vez a varias oposiciones distintas?",
      a: "Sí, no existe ninguna limitación general para presentarse a procesos selectivos de distintos cuerpos o administraciones al mismo tiempo, siempre que cumplas los requisitos de cada uno y no coincidan las fechas de examen.",
    },
    {
      q: "¿Qué pasa si ya soy funcionario y apruebo otra oposición?",
      a: "Puedes optar por tomar posesión de la nueva plaza (pasando a una situación administrativa distinta en tu puesto anterior, como la excedencia o el servicio en otras administraciones) o renunciar a ella y mantener tu puesto actual. Las opciones exactas dependen del régimen jurídico de cada administración.",
    },
    {
      q: "¿Es lo mismo un empleado público que un funcionario?",
      a: "No exactamente. \"Empleado público\" es un término más amplio que incluye tanto a los funcionarios de carrera como al personal laboral e interino de las administraciones. El funcionario de carrera tiene un vínculo estatutario permanente tras superar la oposición correspondiente; el personal laboral se rige por el Estatuto de los Trabajadores y un convenio propio, y el interino cubre plazas de forma temporal.",
    },
    {
      q: "¿Dónde puedo consultar el temario oficial de una oposición?",
      a: "El temario íntegro suele publicarse como anexo de las propias bases de la convocatoria, en el boletín oficial correspondiente o en la web del organismo convocante. Es importante usar siempre la versión vigente en el momento de la convocatoria, ya que puede actualizarse de una edición a otra.",
    },
    {
      q: "¿Qué es la Oferta de Empleo Público (OEP)?",
      a: "Es el documento anual en el que cada administración aprueba cuántas plazas nuevas va a convocar y de qué cuerpos o categorías, antes de que se publiquen las convocatorias concretas de cada una. Una OEP aprobada no implica que la convocatoria se publique de inmediato: puede tardar meses en materializarse.",
    },
    {
      q: "¿De dónde saca este sitio la información?",
      a: "Directamente de la API oficial de datos abiertos del Boletín Oficial del Estado, consultando cada día la sección de oposiciones y concursos. No se modifica el contenido oficial: solo se organiza y clasifica para facilitar su consulta. El texto legal completo siempre está disponible en el enlace al BOE original de cada convocatoria.",
    },
    {
      q: "La categoría o el ámbito de una convocatoria parecen incorrectos, ¿qué ha pasado?",
      a: "La clasificación por categoría y ámbito se genera de forma automática analizando el título y el organismo de cada convocatoria, por lo que en casos puntuales puede no ser exacta. El texto oficial y determinante siempre es el que aparece en el enlace al BOE de cada convocatoria, no la etiqueta que le hemos asignado.",
    },
  ];

  const items = preguntas
    .map(
      (p, i) => `<details class="faq-item"${i === 0 ? " open" : ""}>
  <summary>${escapeHtml(p.q)}</summary>
  <p>${escapeHtml(p.a)}</p>
</details>`
    )
    .join("\n");

  return `
<section class="hero">
  <h1>Preguntas frecuentes</h1>
  <p>Dudas habituales sobre el proceso de oposiciones y sobre cómo funciona este sitio.</p>
</section>
<section class="faq-lista">
  ${items}
</section>`;
}

function paginaGlosario() {
  const terminos = [
    ["Turno libre", "Vía de acceso abierta a cualquier persona que cumpla los requisitos generales de la convocatoria, sin necesidad de pertenecer ya a la administración."],
    ["Promoción interna", "Vía de acceso reservada a quienes ya son personal de la misma administración y optan a un grupo o cuerpo superior."],
    ["Cupo de reserva por discapacidad", "Porcentaje de plazas reservado a personas con un grado de discapacidad igual o superior al mínimo exigido, con posibilidad de adaptaciones en las pruebas."],
    ["Temario oficial", "Listado cerrado de materias sobre las que versarán los exámenes, publicado como anexo de las bases de la convocatoria."],
    ["Tribunal calificador / órgano de selección", "Comisión de personas designadas para diseñar, corregir y calificar las pruebas, así como resolver incidencias durante el proceso."],
    ["Autobaremo", "Formulario en el que la persona candidata puntúa sus propios méritos (experiencia, formación...) siguiendo el baremo oficial, antes de que el tribunal lo revise."],
    ["Fase de oposición", "Parte del proceso selectivo basada en la superación de uno o varios exámenes."],
    ["Fase de concurso", "Parte del proceso selectivo basada en la valoración de méritos acreditados documentalmente, sin examen."],
    ["Ejercicio eliminatorio", "Prueba que hay que superar con una puntuación mínima para poder continuar al siguiente ejercicio del proceso."],
    ["Lista provisional de admitidos", "Primer listado publicado tras el cierre de solicitudes, que indica quién ha sido admitido o excluido y por qué motivo, con plazo para subsanar errores."],
    ["Lista definitiva de admitidos", "Listado que se publica tras resolver las alegaciones a la lista provisional; ya no admite subsanación posterior."],
    ["Bolsa de trabajo / lista de espera", "Relación de personas, ordenada por puntuación, que se usa para cubrir sustituciones o vacantes temporales sin convocar un proceso nuevo cada vez."],
    ["Oferta de Empleo Público (OEP)", "Documento anual en el que una administración aprueba cuántas plazas va a convocar y de qué cuerpos, antes de publicar las convocatorias concretas."],
    ["Grupo o subgrupo de clasificación", "Nivel (A1, A2, B, C1, C2) que determina, entre otras cosas, la titulación mínima exigida y el nivel retributivo de la plaza."],
    ["Plazas convocadas / plazas vacantes", "Número total de puestos que se ofertan en una convocatoria concreta, que puede ser inferior al número total de vacantes existentes en ese cuerpo."],
    ["Recurso de alzada", "Recurso administrativo que se puede presentar contra una resolución que no pone fin a la vía administrativa, ante el órgano superior al que la dictó."],
    ["Recurso de reposición", "Recurso administrativo que se presenta ante el mismo órgano que dictó la resolución que se quiere impugnar, como paso previo a la vía judicial."],
  ];

  const filas = terminos
    .map(([t, d]) => `<div class="glosario-item"><dt>${escapeHtml(t)}</dt><dd>${escapeHtml(d)}</dd></div>`)
    .join("\n");

  return `
<section class="hero">
  <h1>Glosario de términos de las oposiciones</h1>
  <p>Vocabulario habitual en las bases de las convocatorias, explicado en lenguaje sencillo.</p>
</section>
<dl class="glosario">
  ${filas}
</dl>`;
}

function paginaBoletines() {
  const boletines = [
    ["Andalucía", "BOJA", "https://www.juntadeandalucia.es/eboja.html"],
    ["Aragón", "BOA", "https://www.boa.aragon.es/"],
    ["Asturias", "BOPA", "https://sede.asturias.es/bopa"],
    ["Illes Balears", "BOIB", "https://www.caib.es/eboibfront/"],
    ["Canarias", "BOC", "http://www.gobiernodecanarias.org/boc/"],
    ["Cantabria", "BOC", "https://boc.cantabria.es/"],
    ["Castilla-La Mancha", "DOCM", "https://docm.jccm.es/"],
    ["Castilla y León", "BOCyL", "https://bocyl.jcyl.es/"],
    ["Cataluña", "DOGC", "https://dogc.gencat.cat/"],
    ["Comunitat Valenciana", "DOGV", "https://dogv.gva.es/"],
    ["Extremadura", "DOE", "https://doe.juntaex.es/"],
    ["Galicia", "DOG", "https://www.xunta.gal/diario-oficial-galicia"],
    ["Madrid", "BOCM", "https://www.bocm.es/"],
    ["Región de Murcia", "BORM", "https://www.borm.es/"],
    ["Navarra", "BON", "https://bon.navarra.es/"],
    ["País Vasco", "BOPV", "https://www.euskadi.eus/bopv2/"],
    ["La Rioja", "BOR", "https://web.larioja.org/bor-portada"],
    ["Ceuta", "BOCCE", ""],
    ["Melilla", "BOME", ""],
  ];

  const filas = boletines
    .map(
      ([nombre, sigla, url]) => `<div class="boletin-item">
  <span class="boletin-nombre">${escapeHtml(nombre)}</span>
  <span class="boletin-sigla">${escapeHtml(sigla)}</span>
  ${url ? `<a href="${url}" target="_blank" rel="noopener">Abrir portal</a>` : `<span class="boletin-sin-enlace">Consultar sede electrónica</span>`}
</div>`
    )
    .join("\n");

  return `
<section class="hero">
  <h1>Boletines oficiales autonómicos</h1>
  <p>Muchas oposiciones de comunidades autónomas y ayuntamientos no se publican en el BOE, sino en el boletín oficial de su propia comunidad. Aquí tienes el acceso directo a cada uno.</p>
</section>
<div class="boletines-lista">
  ${filas}
</div>
<p class="aviso-contenido">Los portales de las administraciones públicas cambian de dirección de vez en cuando. Si algún enlace no funciona, busca en Google el nombre completo del boletín (por ejemplo, "Boletín Oficial de Aragón sede electrónica") para encontrar la ubicación actual.</p>`;
}

function paginaRecursos() {
  const recursos = [
    { href: "guia.html", titulo: "Guía general de oposiciones", desc: "Tipos de proceso selectivo, requisitos, fases y consejos de planificación." },
    { href: "faq.html", titulo: "Preguntas frecuentes", desc: "Dudas habituales sobre plazos, requisitos y funcionamiento del proceso." },
    { href: "glosario.html", titulo: "Glosario de términos", desc: "Qué significa cada palabra que aparece en las bases de una convocatoria." },
    { href: "boletines.html", titulo: "Boletines oficiales autonómicos", desc: "Enlaces a los boletines de cada comunidad autónoma, para convocatorias que no pasan por el BOE." },
  ];

  return `
<section class="hero">
  <h1>Recursos para opositores</h1>
  <p>Contenido de apoyo, además del listado diario de convocatorias.</p>
</section>
<div class="lista-categorias">
  ${recursos
    .map(
      (r) => `<a class="categoria-card" href="${r.href}">
        <span class="categoria-nombre">${escapeHtml(r.titulo)}</span>
      </a>`
    )
    .join("\n")}
</div>`;
}

function paginaAvisoLegal() {
  return `
<section class="hero"><h1>Aviso legal</h1></section>
<article class="contenido">
  <h2>Titularidad del sitio</h2>
  <p>[Sustituye este bloque por tu nombre o razón social, NIF/CIF, domicilio y correo de contacto, tal y como exige la Ley de Servicios de la Sociedad de la Información (LSSI) para cualquier sitio web con actividad económica en España.]</p>

  <h2>Naturaleza del sitio</h2>
  <p>Este sitio web no es un canal oficial de la Agencia Estatal Boletín Oficial del Estado ni de ninguna otra administración pública. Su único objetivo es facilitar la consulta de convocatorias de empleo público que ya son de acceso libre y gratuito en el BOE, organizándolas y clasificándolas para mayor comodidad del usuario.</p>

  <h2>Exención de responsabilidad</h2>
  <p>La información se genera de forma automática a partir de la API oficial del BOE y puede contener errores de clasificación (categoría o ámbito) derivados de un proceso automatizado. En caso de cualquier discrepancia, prevalece siempre el texto publicado en el BOE, al que se enlaza en cada convocatoria. Este sitio no presta asesoramiento legal ni garantiza la vigencia, exactitud o el resultado de ningún proceso selectivo.</p>

  <h2>Propiedad intelectual</h2>
  <p>Los textos y datos de las convocatorias son información pública procedente del BOE. El diseño, estructura y clasificación propios de este sitio son responsabilidad de su titular.</p>
</article>`;
}

function paginaPrivacidad() {
  return `
<section class="hero"><h1>Política de privacidad y cookies</h1></section>
<article class="contenido">
  <h2>Datos que recogemos</h2>
  <p>Este sitio no requiere registro ni recoge datos personales para su uso básico (consulta de convocatorias). No se almacenan formularios ni cuentas de usuario.</p>

  <h2>Cookies y publicidad</h2>
  <p>Este sitio puede mostrar anuncios a través de Google AdSense u otros proveedores publicitarios. Estos proveedores pueden utilizar cookies propias o de terceros para personalizar los anuncios en función de tus visitas a este y otros sitios web. Puedes consultar y gestionar tus preferencias de anuncios personalizados de Google en <a href="https://adssettings.google.com" target="_blank" rel="noopener">adssettings.google.com</a>, y obtener más información sobre el uso de cookies de Google en <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">policies.google.com/technologies/partner-sites</a>.</p>
  <p>También podemos utilizar herramientas de analítica web (por ejemplo, Google Analytics) para conocer de forma agregada y anónima cómo se usa el sitio y mejorar su contenido.</p>

  <h2>Base legal y consentimiento</h2>
  <p>[Si activas anuncios o analítica, añade aquí un banner de consentimiento de cookies conforme al RGPD/LSSI-CE antes de cargar esos scripts, especialmente si tienes visitas desde la Unión Europea. Existen soluciones gratuitas de "Consent Management Platform" (CMP) certificadas por Google que puedes integrar fácilmente.]</p>

  <h2>Tus derechos</h2>
  <p>Puedes ejercer tus derechos de acceso, rectificación, supresión y oposición escribiendo a [tu correo de contacto].</p>

  <h2>Contacto</h2>
  <p>[Añade aquí tu correo o formulario de contacto.]</p>
</article>`;
}

async function main() {
  let registros = [];
  try {
    registros = JSON.parse(await readFile(DATA_FILE, "utf-8"));
  } catch {
    console.warn("No se encontró data/oposiciones.json todavía; genero el sitio vacío.");
  }

  await mkdir(DOCS_DIR, { recursive: true });

  // ---------- página de inicio: últimas 30 ----------
  const ultimas = registros.slice(0, 30);
  const inicioHtml = `
<section class="hero">
  <div class="hero-texto">
    <h1>Oposiciones y empleo público publicadas en el BOE</h1>
    <p>${SITE_DESC}</p>
    <p class="hero-nota">Última actualización: ${registros[0] ? formatearFecha(registros[0].fecha_publicacion) : "—"}</p>
  </div>
  <div class="sello">
    <strong>${registros.length}</strong>
    <span>CONVOCATORIAS REGISTRADAS</span>
  </div>
</section>
<section class="lista">
  ${ultimas.map(tarjeta).join("\n") || "<p>Todavía no hay datos. El sitio se actualiza automáticamente cada día que se publica el BOE.</p>"}
</section>
<p class="ver-todas"><a href="todas.html">Ver todas las convocatorias →</a></p>`;

  await writeFile(
    path.join(DOCS_DIR, "index.html"),
    layout({
      title: `${SITE_NAME} — Convocatorias actualizadas cada día`,
      description: SITE_DESC,
      canonical: `${SITE_URL}/`,
      activeNav: "inicio",
      bodyHtml: inicioHtml,
    })
  );

  // ---------- página "todas" con filtro por JS ----------
  const todasHtml = `
<section class="hero hero-compacta">
  <div class="hero-texto">
    <h1>Todas las convocatorias</h1>
    <div class="filtros">
      <input type="search" id="buscador" placeholder="Buscar por título u organismo…">
      <select id="filtro-categoria">
        <option value="">Todas las categorías</option>
        ${Object.entries(CATEGORIA_LABELS).map(([id, label]) => `<option value="${id}">${label}</option>`).join("")}
      </select>
    </div>
  </div>
</section>
<section class="lista" id="lista-completa">
  ${registros.map(tarjeta).join("\n")}
</section>
<script src="buscador.js"></script>`;

  await writeFile(
    path.join(DOCS_DIR, "todas.html"),
    layout({
      title: `Todas las convocatorias de oposiciones — ${SITE_NAME}`,
      description: "Listado completo y filtrable de convocatorias de oposiciones publicadas en el BOE.",
      canonical: `${SITE_URL}/todas.html`,
      activeNav: "todas",
      bodyHtml: todasHtml,
    })
  );

  // ---------- página de categorías ----------
  const conteoPorCategoria = {};
  for (const r of registros) {
    conteoPorCategoria[r.categoria] = (conteoPorCategoria[r.categoria] ?? 0) + 1;
  }
  const categoriasHtml = `
<section class="hero hero-compacta">
  <h1>Categorías de oposiciones</h1>
</section>
<section class="lista-categorias">
  ${Object.entries(CATEGORIA_LABELS)
    .map(
      ([id, label]) =>
        `<a class="categoria-card" href="todas.html#${id}" data-jump="${id}">
           <span class="categoria-nombre">${label}</span>
           <span class="categoria-count">${conteoPorCategoria[id] ?? 0}</span>
         </a>`
    )
    .join("\n")}
</section>`;

  await writeFile(
    path.join(DOCS_DIR, "categorias.html"),
    layout({
      title: `Categorías de oposiciones — ${SITE_NAME}`,
      description: "Explora las convocatorias de oposiciones por categoría: policía, sanidad, docencia, justicia y más.",
      canonical: `${SITE_URL}/categorias.html`,
      activeNav: "categorias",
      bodyHtml: categoriasHtml,
    })
  );

  // ---------- páginas de contenido propio (guía, FAQ, legal) ----------
  await writeFile(
    path.join(DOCS_DIR, "recursos.html"),
    layout({
      title: `Recursos para opositores — ${SITE_NAME}`,
      description: "Guía, preguntas frecuentes, glosario de términos y boletines oficiales autonómicos para quienes preparan una oposición.",
      canonical: `${SITE_URL}/recursos.html`,
      activeNav: "recursos",
      bodyHtml: paginaRecursos(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "guia.html"),
    layout({
      title: `Guía para preparar una oposición — ${SITE_NAME}`,
      description: "Guía general sobre tipos de proceso selectivo, requisitos, fases de una convocatoria y consejos de planificación para opositar en España.",
      canonical: `${SITE_URL}/guia.html`,
      activeNav: "recursos",
      bodyHtml: paginaGuia(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "faq.html"),
    layout({
      title: `Preguntas frecuentes sobre oposiciones — ${SITE_NAME}`,
      description: "Respuestas a las dudas más habituales sobre plazos, requisitos y el proceso de oposiciones en España.",
      canonical: `${SITE_URL}/faq.html`,
      activeNav: "recursos",
      bodyHtml: paginaFaq(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "glosario.html"),
    layout({
      title: `Glosario de términos de oposiciones — ${SITE_NAME}`,
      description: "Diccionario de los términos más habituales en las bases de una convocatoria de empleo público: turno libre, autobaremo, OEP y más.",
      canonical: `${SITE_URL}/glosario.html`,
      activeNav: "recursos",
      bodyHtml: paginaGlosario(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "boletines.html"),
    layout({
      title: `Boletines oficiales autonómicos — ${SITE_NAME}`,
      description: "Enlaces directos a los boletines oficiales de cada comunidad autónoma española, para convocatorias que no se publican en el BOE.",
      canonical: `${SITE_URL}/boletines.html`,
      activeNav: "recursos",
      bodyHtml: paginaBoletines(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "aviso-legal.html"),
    layout({
      title: `Aviso legal — ${SITE_NAME}`,
      description: "Aviso legal del sitio.",
      canonical: `${SITE_URL}/aviso-legal.html`,
      activeNav: "",
      bodyHtml: paginaAvisoLegal(),
    })
  );

  await writeFile(
    path.join(DOCS_DIR, "privacidad.html"),
    layout({
      title: `Política de privacidad y cookies — ${SITE_NAME}`,
      description: "Política de privacidad y uso de cookies, incluida la publicidad de terceros.",
      canonical: `${SITE_URL}/privacidad.html`,
      activeNav: "",
      bodyHtml: paginaPrivacidad(),
    })
  );

  // ---------- JSON público (por si en el futuro quieres una app o widget) ----------
  await writeFile(path.join(DOCS_DIR, "oposiciones.json"), JSON.stringify(registros, null, 2));

  // ---------- sitemap.xml básico ----------
  const urls = ["/", "/todas.html", "/categorias.html", "/recursos.html", "/guia.html", "/faq.html", "/glosario.html", "/boletines.html", "/aviso-legal.html", "/privacidad.html"].map(
    (u) => `<url><loc>${SITE_URL}${u}</loc></url>`
  );
  await writeFile(
    path.join(DOCS_DIR, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`
  );

  await writeFile(
    path.join(DOCS_DIR, "robots.txt"),
    `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );

  console.log(`Sitio generado en ${DOCS_DIR} con ${registros.length} convocatorias.`);
}

main().catch((err) => {
  console.error("Error en build-site.mjs:", err);
  process.exit(1);
});
