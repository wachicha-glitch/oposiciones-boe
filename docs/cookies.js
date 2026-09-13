// docs/cookies.js
//
// Banner de consentimiento de cookies, propio y sin dependencias externas.
// Guarda la elección en localStorage y expone window.consentimientoCookies
// para que, en el futuro, el script de Google AdSense (o de analítica) solo
// se cargue si la persona ha aceptado.
//
// Uso futuro, cuando actives AdSense:
//   if (window.consentimientoCookies.obtener() === "aceptado") {
//     // insertar aquí el <script> de AdSense dinámicamente
//   }
//   document.addEventListener("cookies:consentimiento", (e) => {
//     if (e.detail === "aceptado") { /* cargar AdSense */ }
//   });

(function () {
  const CLAVE = "boe-cookies-consentimiento";
  const scriptActual = document.currentScript;
  const base = scriptActual?.dataset.base || "";

  function obtenerRegistro() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE));
    } catch {
      return null;
    }
  }

  function actualizarConsentModeGoogle(valor) {
    if (typeof window.gtag !== "function") return;
    const estado = valor === "aceptado" ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: estado,
      ad_user_data: estado,
      ad_personalization: estado,
      analytics_storage: estado,
    });
  }

  function guardar(valor) {
    try {
      localStorage.setItem(CLAVE, JSON.stringify({ valor, fecha: new Date().toISOString() }));
    } catch {
      // Si localStorage no está disponible (modo privado estricto, etc.),
      // simplemente no persistimos; el banner volverá a aparecer, que es
      // el comportamiento seguro por defecto.
    }
    actualizarConsentModeGoogle(valor);
    document.dispatchEvent(new CustomEvent("cookies:consentimiento", { detail: valor }));
    ocultarBanner();
  }

  function crearBanner() {
    if (document.getElementById("cookie-banner")) return;
    const div = document.createElement("div");
    div.id = "cookie-banner";
    div.className = "cookie-banner";
    div.setAttribute("role", "dialog");
    div.setAttribute("aria-label", "Aviso de cookies");
    div.innerHTML = `
      <p>Usamos cookies propias y, cuando esté activa la publicidad, de terceros (Google) para mostrar anuncios y medir el uso del sitio. Puedes aceptarlas o rechazarlas cuando quieras. Más información en la <a href="${base}privacidad.html">política de privacidad</a>.</p>
      <div class="cookie-banner-botones">
        <button type="button" id="cookie-rechazar">Rechazar</button>
        <button type="button" id="cookie-aceptar">Aceptar</button>
      </div>`;
    document.body.appendChild(div);
    document.getElementById("cookie-aceptar").addEventListener("click", () => guardar("aceptado"));
    document.getElementById("cookie-rechazar").addEventListener("click", () => guardar("rechazado"));
  }

  function mostrarBanner() {
    crearBanner();
    requestAnimationFrame(() => document.getElementById("cookie-banner")?.classList.add("visible"));
  }

  function ocultarBanner() {
    document.getElementById("cookie-banner")?.classList.remove("visible");
  }

  window.consentimientoCookies = {
    obtener: () => obtenerRegistro()?.valor ?? null,
    aceptar: () => guardar("aceptado"),
    rechazar: () => guardar("rechazado"),
    mostrarBanner, // usado por el enlace "Gestionar cookies" del pie de página
  };

  document.addEventListener("DOMContentLoaded", () => {
    const registro = obtenerRegistro();
    if (!registro) {
      mostrarBanner();
    } else {
      actualizarConsentModeGoogle(registro.valor);
    }
  });
})();
