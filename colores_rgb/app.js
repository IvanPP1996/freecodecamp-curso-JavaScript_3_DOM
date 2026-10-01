const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar tecxto de los parrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor (rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;

}

// Actualizar el input para rojo
inputRojo.addEventListener("change", (evento) => {
    rojo = evento.target.value;
    textoRojo.innerText = rojo;
    actualizarColor (rojo, verde, azul);

});
// Actualizar el input para verde
inputVerde.addEventListener("change", (evento) => {
    verde = evento.target.value;
    textoVerde.innerText = verde;
    actualizarColor (rojo, verde, azul);

});
// Actualizar el input para azul
inputAzul.addEventListener("change", (evento) => {
    azul = evento.target.value;
    textoAzul.innerText = azul;
    actualizarColor (rojo, verde, azul);

});

// Otra forma sin usar el evento

/* // Actualizar el input para rojo
inputRojo.addEventListener("change", () => {
    rojo = inputRojo.value;
    textoRojo.innerText = rojo;
    actualizarColor (rojo, verde, azul);

});
// Actualizar el input para verde
inputVerde.addEventListener("change", () => {
    verde = inputVerde.value;
    textoVerde.innerText = verde;
    actualizarColor (rojo, verde, azul);

});
// Actualizar el input para azul
inputAzul.addEventListener("change", () => {
    azul = inputAzul.value;
    textoAzul.innerText = azul;
    actualizarColor (rojo, verde, azul);

}); */