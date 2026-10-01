// Seleccionar elementos del DOM

const boton = document.querySelector("button");
const color_letra = document.getElementById("color");


function generarColorHexAleatorio () {
    let digitos = "0123456789ABCDEF";
    let color = "#"

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio]
    }

    return color;
}


addEventListener("click", function() {
    let colorAleatorio = generarColorHexAleatorio();
    // Actualizando el texto
    color_letra.textContent = colorAleatorio;
    // Actualizando color de fondo
    document.body.style.backgroundColor = colorAleatorio;

});