// Menú de navegación colapsable en pantallas estrechas.
(function () {
  const boton = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-principal");
  if (!boton || !nav) return;

  boton.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", String(abierto));
  });

  // Cierra el menú al navegar (mejor experiencia en móvil)
  nav.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("abierto");
      boton.setAttribute("aria-expanded", "false");
    });
  });
})();
