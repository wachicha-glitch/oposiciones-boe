// Filtro 100% cliente, sin dependencias: busca por texto y filtra por categoría.
(function () {
  const buscador = document.getElementById("buscador");
  const filtroCategoria = document.getElementById("filtro-categoria");
  const tarjetas = Array.from(document.querySelectorAll("#lista-completa .tarjeta"));

  // Preselecciona categoría desde /categorias.html#id, y término de búsqueda desde ?q=
  // (esto último es lo que permite que el cuadro de búsqueda de Google, si llega a
  // activarse, funcione: target "todas.html?q={search_term_string}").
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get("q");
  if (qParam && buscador) buscador.value = qParam;

  const hash = window.location.hash.replace("#", "");
  if (hash && filtroCategoria) {
    filtroCategoria.value = hash;
  }

  function aplicarFiltros() {
    const texto = (buscador?.value || "").trim().toLowerCase();
    const categoria = filtroCategoria?.value || "";

    tarjetas.forEach((t) => {
      const coincideTexto = !texto || t.textContent.toLowerCase().includes(texto);
      const coincideCategoria = !categoria || t.dataset.categoria === categoria;
      t.style.display = coincideTexto && coincideCategoria ? "" : "none";
    });
  }

  buscador?.addEventListener("input", aplicarFiltros);
  filtroCategoria?.addEventListener("change", aplicarFiltros);
  aplicarFiltros();
})();
