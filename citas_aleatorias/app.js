let botonElemento = document.getElementById("boton-cambiar-cita");
let citaElemento = document.getElementById("cita");
let autorElemento = document.getElementById("autor");

function generarNumeroAleatorio (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function cambiarCita () {
    let indiceAleatorio = generarNumeroAleatorio (0, citas.length);
    citaElemento.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElemento.innerText = citas[indiceAleatorio].autor;
};

cambiarCita();

botonElemento.addEventListener("click", cambiarCita)