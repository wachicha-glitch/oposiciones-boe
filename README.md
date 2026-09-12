# Oposiciones BOE Hoy

Sitio 100% gratuito y automatizado que publica cada día las convocatorias de
oposiciones y empleo público que aparecen en el BOE (sección "II.B.
Oposiciones y concursos"), usando la **API oficial de datos abiertos del BOE**
(gratuita, sin necesidad de clave): https://www.boe.es/datosabiertos/api/api.php

No hace scraping de HTML: consume directamente el JSON oficial, así que es
fiable y no se rompe si cambia el diseño de la web del BOE.

## Cómo funciona

1. `scripts/fetch-boe.mjs` descarga el sumario diario del BOE, filtra la
   sección de oposiciones, detecta automáticamente **categoría**
   (policía, sanidad, docencia, justicia, administración general...) y
   **ámbito** (comunidad autónoma, local, universidades, estado) a partir
   del título y el organismo, y lo guarda en `data/oposiciones.json`.
2. `scripts/build-site.mjs` genera un sitio estático (HTML + CSS + un poco
   de JS) en `docs/`, listo para GitHub Pages.
3. `.github/workflows/actualizar.yml` ejecuta los dos pasos anteriores
   automáticamente de lunes a sábado (el BOE no se publica los domingos) y
   sube los cambios al repositorio — sin servidores, sin coste.

## Puesta en marcha (paso a paso)

1. **Crea un repositorio nuevo en GitHub** (público) y sube todo el
   contenido de esta carpeta.
2. Ve a **Settings → Pages** del repositorio y selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main` / carpeta `docs`
   - Guarda. En unos minutos tu web estará en
     `https://TU-USUARIO.github.io/TU-REPOSITORIO/`
3. Ve a **Settings → Actions → General → Workflow permissions** y marca
   **"Read and write permissions"** (necesario para que el robot pueda
   hacer commit de las actualizaciones diarias).
4. Ve a la pestaña **Actions** del repositorio, abre el workflow
   "Actualizar oposiciones BOE" y pulsa **"Run workflow"** para hacer la
   primera ejecución manual (así no tienes que esperar al cron).
5. (Opcional pero recomendado) Haz un **backfill** de los últimos meses
   para no arrancar con la web vacía. Desde tu propio ordenador, con
   Node.js ≥ 18 instalado:
   ```bash
   node scripts/fetch-boe.mjs 20260601 20260912
   node scripts/build-site.mjs
   git add data/ docs/
   git commit -m "Backfill inicial"
   git push
   ```
6. Cuando tengas dominio propio, edita `SITE_URL` en
   `scripts/build-site.mjs` y vuelve a generar el sitio.

A partir de aquí, el sitio se actualiza solo cada día.

## Páginas de contenido incluidas

Ya incluidas y generadas automáticamente por `scripts/build-site.mjs`:

- **`/guia.html`** — guía general sobre tipos de proceso selectivo, fases de
  una convocatoria y consejos de planificación.
- **`/faq.html`** — preguntas frecuentes sobre plazos, requisitos y el
  funcionamiento del propio sitio.
- **`/aviso-legal.html`** y **`/privacidad.html`** — textos legales base.
  **Antes de publicar, edita `scripts/build-site.mjs`** (funciones
  `paginaAvisoLegal()` y `paginaPrivacidad()`) y sustituye los corchetes
  `[...]` por tus datos reales: titular del sitio, NIF/CIF si aplica, y
  correo de contacto. Son obligatorios para cumplir la LSSI y para que
  Google AdSense apruebe el sitio.

Si activas anuncios o analítica, añade además un banner de consentimiento
de cookies (CMP) antes de cargar esos scripts si vas a tener visitas desde
la Unión Europea — hay opciones gratuitas certificadas por Google, como
Funding Choices / Google Consent Mode.

## Antes de pedir Google AdSense

Un listado plano de convocatorias no suele bastar para que AdSense apruebe
el sitio (política de "contenido escaso/de bajo valor"). Antes de solicitar
la revisión, añade contenido propio y estructurado, por ejemplo:

- Una página "¿Cómo presentarse a una oposición?" con una guía genérica.
- Páginas por categoría con contexto (requisitos habituales, tipos de
  proceso selectivo, enlaces a temarios).
- Una sección de preguntas frecuentes.
- Un buscador o filtros útiles (ya incluidos en `/todas.html`).

Esto también ayuda al SEO: Google prioriza contenido que aporta algo más
que reproducir una fuente oficial.

## Estructura del proyecto

```
oposiciones-boe/
├── data/oposiciones.json        # datos acumulados (se genera solo)
├── docs/                        # sitio publicado (GitHub Pages sirve esta carpeta)
├── scripts/
│   ├── fetch-boe.mjs             # descarga + parseo del BOE
│   └── build-site.mjs            # genera el HTML estático
├── .github/workflows/actualizar.yml
└── package.json
```

## Aviso legal

Los datos provienen del BOE, que es información pública. Este sitio no es
un canal oficial de la Agencia Estatal Boletín Oficial del Estado; siempre
se enlaza al PDF/HTML oficial para que el usuario consulte el texto legal
completo antes de tomar cualquier decisión.
