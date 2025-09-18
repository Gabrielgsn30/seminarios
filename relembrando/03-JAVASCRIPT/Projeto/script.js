const toggle = document.getElementById("temaToggle");

toggle.addEventListener("change", function () {
  document.body.className = this.checked ? "escuro" : "claro";
});


function ajustarFonte(delta) {
  // Seções onde queremos alterar a fonte
  const elementos = document.querySelectorAll("section, footer,nav");

  elementos.forEach(el => {
    const estilo =
    window.getComputedStyle(el, null).getPropertyValue("font-size");
    const tamanhoAtual = parseFloat(estilo); // valor atual em px
    let novoTamanho = tamanhoAtual + delta; // limite mínimo de 10px
    if (novoTamanho > 30 ) novoTamanho = 30;
    if (novoTamanho < 10 ) novoTamanho = 10;
    el.style.fontSize = `${novoTamanho}px`;
  });
}

// Explicação:
// window.getComputedStyle pega o estilo atual aplicado no elemento (inclusive herdado).
// parseFloat extrai apenas o número da fonte (ex: "16px" → 16).
// Isso funciona independentemente do valor original — ele soma ou subtrai 1px ao que já está visivelmente aplicado.
// Se quiser aplicar a outros elementos como <pre>, <p>, etc., basta incluí-los no seletor do querySelectorAll.
