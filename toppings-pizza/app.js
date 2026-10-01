// ----------------------------------------------------- SELECCIONAR ELEMENTOS EN EL DOM -------------------------------------------------




// Obteniendo un elemento por el id "getElementById()"
// ---------------------------------------------------

/* const contenedor = document.getElementById("contenedor");
console.log(contenedor);
//Accediendo al contenido que tiene en HTML
console.log(contenedor.innerHTML);
// Tipo de variable
console.log(typeof contenedor.innerHTML);

const titulo = document.getElementById("titulo");
console.log(titulo);
// Retornando el contenido de la eqtiqueta
console.log(titulo.innerText);
// Retornando el nombre de la etiqueta (H1)
console.log(titulo.tagName); */


// Obteniendo un elemento por clase "getElementByClassName()"
// ---------------------------------------------------

/* const toppings = document.getElementsByClassName("topping");
console.log(toppings);
// Largo de una clase cuando esta en varios sitios
console.log(toppings.length);
// Obtener por posición la primera opción
console.log(toppings[0]);
console.log(toppings[1]);
console.log(toppings[2]);
// Obtener un elemento en este caso el ID de la primera opción
console.log(toppings[0].id); */


// Obteniendo un elemento por etiqueta especifica de HTML "getElementByTagName()"
// ---------------------------------------------------

/* const misToppings = document.getElementsByTagName("li");
console.log(misToppings); */


// Obteniendo un elemento por CSS especifica de HTML "querySelector() y querySelector(All)"
// ---------------------------------------------------

/* const primerToppingNaranja = document.querySelector(".topping.fondo-naranja");
console.log(primerToppingNaranja);

const variosToppingNaranja = document.querySelector("ul li.fondo-naranja");
console.log(variosToppingNaranja);

const otrosToppingNaranja = document.querySelector("ul li:not(.fondo-marron)");
console.log(otrosToppingNaranja);

// Vota una lista de nodos
const toppingsNaranja = document.querySelectorAll(".topping.fondo-naranja");
console.log(toppingsNaranja);
console.log(toppingsNaranja.length);
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja[1]); */




// --------------------------------------------------- ASIGNAR ESTILOS ----------------------------------------------------------------------




// Agregando estilos
// ---------------------------------------------------

/* const primerTopping = document.querySelector(".topping");

// Todas las propiedades CSS que se pueden personalizar
console.log(primerTopping.style);

primerTopping.style.backgroundColor = "Blue";
primerTopping.style.color = "#6dff00";
primerTopping.style.textTransform = "uppercase"; */


// texto en el DOM (Accediendo al texto)
// ---------------------------------------------------

/* const listaDeToppings = document.getElementById("lista-toppings");

// Texto de las descripciones de los elementos
console.log(listaDeToppings.innerText);
// Texto de las descripciones de los elementos pero incluye espacios del HTML es decir la identación
console.log(listaDeToppings.textContent);
// Retorna estructura HTML de los elementos
console.log(listaDeToppings.innerHTML); */


// texto en el DOM (Modificando el texto)
// ---------------------------------------------------

/* const titulo = document.getElementById("titulo");

// Modificando el título
titulo.innerText = "Mis toppings favoritos";
// Todas las propiedades CSS que se pueden personalizar
console.log(titulo.style); */


// texto en el DOM (Atributos del texto)
// ---------------------------------------------------

/* const enlace = document.getElementsByTagName("a");

// Mostrar atributo
console.log(enlace[0].getAttribute("href"));
// Eliminar un atributo
console.log(enlace[0].removeAttribute("href"));
// Actualizar un atributo
console.log(enlace[0].setAttribute("href", "https://www.freecodecamp.org/")); */


// Clases
// ---------------------------------------------------

/* const primerTopping = document.querySelector(".topping");

// Mostrar todas las clases que tiene el elemento
console.log(primerTopping.classList);
// Agregar una clase
primerTopping.classList.add("texto-verde");
// Verificar si un elemento posee una clase
console.log(primerTopping.classList.contains("fondo-marron"));
console.log(primerTopping.classList.contains("fondo-azul"));
// Eliminar una clase
primerTopping.classList.remove("topping"); */


// Elementos
// ---------------------------------------------------

/* const listDeToppings = document.getElementById("lista-toppings");

const toppinNuevo = document.createElement("li");

toppinNuevo.classList.add("topping", "fondo-marron");
toppinNuevo.innerText= "Queso extra";

// Crear un elemento
listDeToppings.append(toppinNuevo);
listDeToppings.appendChild(toppinNuevo);
// Remover un elmento
toppinNuevo.remove(); */




// --------------------------------------------------- Recorrer el DOM ----------------------------------------------------------------




/* const listDeToppings = document.getElementById("lista-toppings");

// Obteniendo el elemento padre (div)
console.log(listDeToppings.parentElement);
console.log(listDeToppings.parentNode);
// Obteniendo el elemento padre del padre (Body)
console.log(listDeToppings.parentElement.parentElement);
// Obteniendo el elemento hijo (li acitunas)
console.log(listDeToppings.children);
console.log(listDeToppings.firstChild);
// Obteniendo el primer elemento hijo (li acitunas)
console.log(listDeToppings.children[0]);
console.log(listDeToppings.firstElementChild);
// Obteniendo el ultimo elemento hijo (li champiñones)
console.log(listDeToppings.lastElementChild);
// Obteniendo el elemento hermano (titulo)
console.log(listDeToppings.previousElementSibling);
// Obteniendo el proximo elemento hermano (a)
console.log(listDeToppings.nextElementSibling);
// Obteniendo el elemento por nodos (#text)
console.log(listDeToppings.previousSibling);
console.log(listDeToppings.nextSibling); */




// --------------------------------------------------- Eventos del DOM ----------------------------------------------------------------




// Usando (addEventListener())
// ---------------------------------------------------

/* const toppingAlbahaca = document.getElementsByClassName("topping"); */

// 1) forma de usar
/* function mostrarClic (evento) {
    // console.log("Clic");
    // console.log(evento);
    // console.log(evento.target);
    console.log(evento.target.innerText);
}

for (const topping of toppingAlbahaca) {
    console.log(topping);
    topping.addEventListener("click", mostrarClic);
} */


// 2) forma de usar cuando e suna función corta
/* for (const topping of toppingAlbahaca) {
    console.log(topping);
    topping.addEventListener("click", (evento) => {
        console.log(evento.target.innerText);
    });
} */


// toppingAlbahaca.addEventListener("click", mostrarClic);