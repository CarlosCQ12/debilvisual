// JavaScript para controlar las opciones de accesibilidad

// Aumentar el tamaño del texto
document.getElementById("aumentar-texto").addEventListener("click", function () {
    aumentarTexto();
});

function aumentarTexto() {
    // Aumenta el tamaño de fuente de todo el cuerpo del documento
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    const currentFontSize = parseFloat(computedStyle.fontSize);
    const newFontSize = currentFontSize * 1.2; // Aumento del 20%
    body.style.fontSize = newFontSize + "px";
}

// Activar el alto contraste
document.getElementById("contraste-alto").addEventListener("click", function () {
    activarContrasteAlto();
});

function activarContrasteAlto() {
    // Activa o desactiva la clase "alto-contraste" en el cuerpo del documento
    const body = document.body;
    body.classList.toggle("alto-contraste");
}

// Habilitar la lectura en voz alta
document.getElementById("lectura-voz").addEventListener("click", function () {
    leerTextoEnVozAlta();
});

function leerTextoEnVozAlta() {
    // Utiliza la API de síntesis de voz de JavaScript para leer el contenido en voz alta
    const texto = document.body.textContent;
    const utterance = new SpeechSynthesisUtterance(texto);
    window.speechSynthesis.speak(utterance);
}

// Activar el teclado virtual
document.getElementById("teclado-virtual").addEventListener("click", function () {
    activarTecladoVirtual();
});

