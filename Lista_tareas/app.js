const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaTareas = document.getElementById("lista-de-tareas");

function agregarTarea () {

    if (input.value) {
        // Creando tarea
        let tareaNueva = document.createElement("div");
        tareaNueva.classList.add("tarea");

        // texto ingresado por usuario
        let texto =  document.createElement("p");
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        
        // Crear y agregar contenedor de iconos
        let iconos = document.createElement("div");
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement("i");
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.addEventListener("click", completarTarea);

        // Eliminar
        let eliminar = document.createElement("i");
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener("click", eliminarTarea);
        
        iconos.append(completar, eliminar);

        // Agregar tarea a la lista
        listaTareas.appendChild(tareaNueva);
    
    } else {
        alert("Por favor ingeresa una tarea");

    };
};

function completarTarea (evento) {
    let tarea = evento.target.parentNode.parentNode;
    tarea.classList.toggle("completada");
}

function eliminarTarea (evento) {
    let tarea = evento.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener("click", agregarTarea);

// Evento presionado por teclado (Enter)
input.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        agregarTarea();
    }
});