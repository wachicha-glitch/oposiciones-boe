// scripts/comunidades.mjs
//
// Mapeo de provincias españolas a comunidades autónomas, compartido entre
// fetch-boe.mjs (que clasifica al descargar) y build-site.mjs (que genera las
// páginas por comunidad). Se mantiene en su propio fichero para que importarlo
// no ejecute la descarga del BOE.
//
// El BOE incluye la provincia entre paréntesis en la mayoría de convocatorias
// locales ("Ayuntamiento de Bueu (Pontevedra)"), lo que permite deducir la
// comunidad autónoma con bastante fiabilidad. Se incluyen las variantes
// bilingües y las grafías oficiales que usa el propio BOE.

export const PROVINCIA_A_COMUNIDAD = {
  // Andalucía
  "almería": "andalucia", "cádiz": "andalucia", "córdoba": "andalucia", "granada": "andalucia",
  "huelva": "andalucia", "jaén": "andalucia", "málaga": "andalucia", "sevilla": "andalucia",
  // Aragón
  "huesca": "aragon", "teruel": "aragon", "zaragoza": "aragon",
  // Asturias
  "asturias": "asturias",
  // Illes Balears
  "illes balears": "baleares", "baleares": "baleares", "islas baleares": "baleares",
  // Canarias
  "las palmas": "canarias", "santa cruz de tenerife": "canarias",
  // Cantabria
  "cantabria": "cantabria",
  // Castilla-La Mancha
  "albacete": "castilla-la-mancha", "ciudad real": "castilla-la-mancha", "cuenca": "castilla-la-mancha",
  "guadalajara": "castilla-la-mancha", "toledo": "castilla-la-mancha",
  // Castilla y León
  "ávila": "castilla-y-leon", "burgos": "castilla-y-leon", "león": "castilla-y-leon",
  "palencia": "castilla-y-leon", "salamanca": "castilla-y-leon", "segovia": "castilla-y-leon",
  "soria": "castilla-y-leon", "valladolid": "castilla-y-leon", "zamora": "castilla-y-leon",
  // Cataluña
  "barcelona": "cataluna", "girona": "cataluna", "gerona": "cataluna",
  "lleida": "cataluna", "lérida": "cataluna", "tarragona": "cataluna",
  // Comunitat Valenciana
  "alicante": "valenciana", "alicante/alacant": "valenciana", "alacant": "valenciana",
  "castellón": "valenciana", "castellón/castelló": "valenciana", "castelló": "valenciana",
  "valencia": "valenciana", "valencia/valència": "valenciana", "valència": "valenciana",
  // Extremadura
  "badajoz": "extremadura", "cáceres": "extremadura",
  // Galicia
  "a coruña": "galicia", "la coruña": "galicia", "lugo": "galicia",
  "ourense": "galicia", "orense": "galicia", "pontevedra": "galicia",
  // Madrid
  "madrid": "madrid",
  // Murcia
  "murcia": "murcia",
  // Navarra
  "navarra": "navarra",
  // País Vasco
  "araba/álava": "pais-vasco", "álava": "pais-vasco", "araba": "pais-vasco",
  "bizkaia": "pais-vasco", "vizcaya": "pais-vasco",
  "gipuzkoa": "pais-vasco", "guipúzcoa": "pais-vasco",
  // La Rioja
  "la rioja": "la-rioja",
  // Ciudades autónomas
  "ceuta": "ceuta", "melilla": "melilla",
};

export const COMUNIDAD_LABELS = {
  "andalucia": "Andalucía",
  "aragon": "Aragón",
  "asturias": "Asturias",
  "baleares": "Illes Balears",
  "canarias": "Canarias",
  "cantabria": "Cantabria",
  "castilla-la-mancha": "Castilla-La Mancha",
  "castilla-y-leon": "Castilla y León",
  "cataluna": "Cataluña",
  "valenciana": "Comunitat Valenciana",
  "extremadura": "Extremadura",
  "galicia": "Galicia",
  "madrid": "Comunidad de Madrid",
  "murcia": "Región de Murcia",
  "navarra": "Navarra",
  "pais-vasco": "País Vasco",
  "la-rioja": "La Rioja",
  "ceuta": "Ceuta",
  "melilla": "Melilla",
  "estatal": "Ámbito estatal",
  "sin-determinar": "Sin determinar",
};

// Enlace al boletín oficial de cada comunidad, para poder decirle a la persona
// dónde encontrar las convocatorias autonómicas que no pasan por el BOE.
export const COMUNIDAD_BOLETIN = {
  "andalucia": { sigla: "BOJA", nombre: "Boletín Oficial de la Junta de Andalucía", url: "https://www.juntadeandalucia.es/eboja.html" },
  "aragon": { sigla: "BOA", nombre: "Boletín Oficial de Aragón", url: "https://www.boa.aragon.es/" },
  "asturias": { sigla: "BOPA", nombre: "Boletín Oficial del Principado de Asturias", url: "https://sede.asturias.es/bopa" },
  "baleares": { sigla: "BOIB", nombre: "Butlletí Oficial de les Illes Balears", url: "https://www.caib.es/eboibfront/" },
  "canarias": { sigla: "BOC", nombre: "Boletín Oficial de Canarias", url: "http://www.gobiernodecanarias.org/boc/" },
  "cantabria": { sigla: "BOC", nombre: "Boletín Oficial de Cantabria", url: "https://boc.cantabria.es/" },
  "castilla-la-mancha": { sigla: "DOCM", nombre: "Diario Oficial de Castilla-La Mancha", url: "https://docm.jccm.es/" },
  "castilla-y-leon": { sigla: "BOCyL", nombre: "Boletín Oficial de Castilla y León", url: "https://bocyl.jcyl.es/" },
  "cataluna": { sigla: "DOGC", nombre: "Diari Oficial de la Generalitat de Catalunya", url: "https://dogc.gencat.cat/" },
  "valenciana": { sigla: "DOGV", nombre: "Diari Oficial de la Generalitat Valenciana", url: "https://dogv.gva.es/" },
  "extremadura": { sigla: "DOE", nombre: "Diario Oficial de Extremadura", url: "https://doe.juntaex.es/" },
  "galicia": { sigla: "DOG", nombre: "Diario Oficial de Galicia", url: "https://www.xunta.gal/diario-oficial-galicia" },
  "madrid": { sigla: "BOCM", nombre: "Boletín Oficial de la Comunidad de Madrid", url: "https://www.bocm.es/" },
  "murcia": { sigla: "BORM", nombre: "Boletín Oficial de la Región de Murcia", url: "https://www.borm.es/" },
  "navarra": { sigla: "BON", nombre: "Boletín Oficial de Navarra", url: "https://bon.navarra.es/" },
  "pais-vasco": { sigla: "BOPV", nombre: "Boletín Oficial del País Vasco", url: "https://www.euskadi.eus/bopv2/" },
  "la-rioja": { sigla: "BOR", nombre: "Boletín Oficial de La Rioja", url: "https://web.larioja.org/bor-portada" },
  "ceuta": { sigla: "BOCCE", nombre: "Boletín Oficial de la Ciudad de Ceuta", url: "" },
  "melilla": { sigla: "BOME", nombre: "Boletín Oficial de la Ciudad de Melilla", url: "" },
};

// Extrae la provincia que el BOE pone entre paréntesis y la traduce a comunidad autónoma.
export function detectarComunidad(textoCompleto) {
  const t = (textoCompleto || "").toLowerCase();

  // 1) Provincia entre paréntesis: es el caso más fiable y el más frecuente en local.
  const parentesis = t.match(/\(([^)]+)\)/g) ?? [];
  for (const bloque of parentesis) {
    const contenido = bloque.slice(1, -1).trim();
    if (PROVINCIA_A_COMUNIDAD[contenido]) return PROVINCIA_A_COMUNIDAD[contenido];
    // Algunos títulos llevan "(Alicante/Alacant)" o similares; probamos cada mitad.
    for (const parte of contenido.split("/")) {
      const p = parte.trim();
      if (PROVINCIA_A_COMUNIDAD[p]) return PROVINCIA_A_COMUNIDAD[p];
    }
  }

  // 2) Diputaciones y cabildos nombran la provincia sin paréntesis.
  const dip = t.match(/diputaci[óo]n provincial de ([a-záéíóúñü\s]+?)(?:,|\.|\s+referente)/);
  if (dip && PROVINCIA_A_COMUNIDAD[dip[1].trim()]) return PROVINCIA_A_COMUNIDAD[dip[1].trim()];
  if (/cabildo insular de /.test(t)) return "canarias";
  if (/consell insular/.test(t)) return "baleares";

  // 3) Organismos autonómicos que se nombran directamente.
  if (t.includes("servicio andaluz de salud") || t.includes("junta de andalucía")) return "andalucia";
  if (t.includes("generalitat de catalunya") || t.includes("generalidad de cataluña")) return "cataluna";
  if (t.includes("generalitat valenciana")) return "valenciana";
  if (t.includes("xunta de galicia")) return "galicia";
  if (t.includes("gobierno vasco") || t.includes("eusko jaurlaritza") || t.includes("osakidetza")) return "pais-vasco";
  if (t.includes("comunidad de madrid")) return "madrid";
  if (t.includes("junta de castilla y león")) return "castilla-y-leon";
  if (t.includes("junta de castilla-la mancha") || t.includes("junta de comunidades de castilla-la mancha")) return "castilla-la-mancha";
  if (t.includes("junta de extremadura")) return "extremadura";
  if (t.includes("gobierno de aragón") || t.includes("diputación general de aragón")) return "aragon";
  if (t.includes("gobierno de navarra")) return "navarra";
  if (t.includes("gobierno de canarias")) return "canarias";
  if (t.includes("gobierno de cantabria")) return "cantabria";
  if (t.includes("gobierno de la rioja")) return "la-rioja";
  if (t.includes("principado de asturias")) return "asturias";
  if (t.includes("región de murcia")) return "murcia";
  for (const [provincia, comunidad] of Object.entries(PROVINCIA_A_COMUNIDAD)) {
    if (t.includes(`de ${provincia}`)) return comunidad;
  }

  // 4) Ministerios y organismos claramente estatales.
  if (t.includes("ministerio") || t.includes("agencia estatal") || t.includes("subsecretaría")) return "estatal";

  return "sin-determinar";
}

export function detectarAmbito(textoCompleto) {
  const t = (textoCompleto || "").toLowerCase();
  if (t.includes("ayuntamiento") || t.includes("diputación") || t.includes("cabildo") || t.includes("consell insular") || t.includes("consorcio") || t.includes("mancomunidad")) {
    return "Ámbito local";
  }
  if (t.includes("universidad")) return "Universidades";
  const comunidad = detectarComunidad(textoCompleto);
  if (comunidad !== "estatal" && comunidad !== "sin-determinar") return COMUNIDAD_LABELS[comunidad];
  return "Estado";
}
