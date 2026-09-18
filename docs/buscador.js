// Filtro 100% cliente, sin dependencias: busca por texto y filtra por categoría
// y por comunidad autónoma.
(function () {
  const buscador = document.getElementById("buscador");
  const filtroCategoria = document.getElementById("filtro-categoria");
  const filtroComunidad = document.getElementById("filtro-comunidad");
  const tarjetas = Array.from(document.querySelectorAll("#lista-completa .tarjeta"));
  const contador = document.getElementById("contador-resultados");

  // Preselecciona filtros desde la URL: ?q=texto&cat=categoria&com=comunidad
  // (?q= es además lo que usa el SearchAction declarado en la portada).
  const params = new URLSearchParams(window.location.search);
  const qParam = params.get("q");
  if (qParam && buscador) buscador.value = qParam;
  const catParam = params.get("cat");
  if (catParam && filtroCategoria) filtroCategoria.value = catParam;
  const comParam = params.get("com");
  if (comParam && filtroComunidad) filtroComunidad.value = comParam;

  // Compatibilidad con enlaces antiguos del tipo /categorias.html#id
  const hash = window.location.hash.replace("#", "");
  if (hash && filtroCategoria && !catParam) filtroCategoria.value = hash;

  function aplicarFiltros() {
    const texto = (buscador?.value || "").trim().toLowerCase();
    const categoria = filtroCategoria?.value || "";
    const comunidad = filtroComunidad?.value || "";
    let visibles = 0;

    tarjetas.forEach((t) => {
      const coincideTexto = !texto || t.textContent.toLowerCase().includes(texto);
      const coincideCategoria = !categoria || t.dataset.categoria === categoria;
      const coincideComunidad = !comunidad || t.dataset.comunidad === comunidad;
      const visible = coincideTexto && coincideCategoria && coincideComunidad;
      t.style.display = visible ? "" : "none";
      if (visible) visibles++;
    });

    if (contador) {
      contador.textContent =
        visibles === tarjetas.length
          ? `${tarjetas.length} convocatorias`
          : `${visibles} de ${tarjetas.length} convocatorias`;
    }
  }

  buscador?.addEventListener("input", aplicarFiltros);
  filtroCategoria?.addEventListener("change", aplicarFiltros);
  filtroComunidad?.addEventListener("change", aplicarFiltros);
  aplicarFiltros();
})();
