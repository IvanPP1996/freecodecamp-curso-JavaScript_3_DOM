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

