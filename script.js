const texto = document.getElementById("texto");
const idiomaOrigem = document.getElementById("idiomaOrigem");
const idiomaDestino = document.getElementById("idiomaDestino");
const botao = document.getElementById("botaoTraduzir");
const resultado = document.getElementById("resultado");
const trocarIdiomas = document.getElementById("trocarIdiomas");

botao.addEventListener("click", async function() {

    const textoDigitado = texto.value;
    const origem = idiomaOrigem.value;
    const destino = idiomaDestino.value;

    if (textoDigitado === "") {
        resultado.textContent = "⚠️ Digite alguma coisa para traduzir!";
        return;
    }

    resultado.textContent = "⏳ Traduzindo...";

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textoDigitado)}&langpair=${origem}|${destino}`;

    const resposta = await fetch(url);

    const dados = await resposta.json();

    resultado.textContent = dados.responseData.translatedText;

});


trocarIdiomas.addEventListener("click", function() {

    const idiomaTemporario = idiomaOrigem.value;

    idiomaOrigem.value = idiomaDestino.value;
    idiomaDestino.value = idiomaTemporario;

    const textoTemporario = texto.value;

    texto.value = resultado.textContent;
    resultado.textContent = textoTemporario;

});