
// console.log("hola, si funciona");
// alert("SOY UNA ALERTA....OJO");
// confirm("ACEPTA O RECHAZA");
// prompt("Cómo te llamas?");

// VARIABLES

// let numero = 1990;
// console.log(numero);

// let nombre = "Juan"
// console.log(nombre,"-- Primer valor para Nombre");

// nombre ="Alberto"

// console.log(nombre,"-- Segundo valor para Nombre");

/*--- CONCATENACIÓN ---*/
// let nombreCompleto = prompt("Nombre Completo");
// alert("Hola "+nombreCompleto);
/* Prompt siempre devuelve un string */

// let primNum = Number(prompt("escribe un numero positivo"));
// let segNum = Number(prompt("escribe otro numero positivo"));

// let resultado = primNum + segNum;

// alert("La suma de ambos números es "+resultado);

// let edad = "23";
// let primerNombre = "Juan";
// let apellido ="Gomez";

// console.log(`Hola mi nombre es ${primerNombre} mi apellido es ${apellido}. Tengo ${edad} años de edad.`);

// /*   DOM (Document Object Model)  trae elementos desde html o css*/
// let elemento = document.querySelector("h6");
// console.log(elemento);

// let menu = document.querySelector(".navbar");
// let cardSection = document.querySelector("#card-section");
// let footer = document.querySelector("foooter");

// /* MANIPULAR EL DOM Modificar el contenido*/
// menu.innerHTML = "Modificando el menú desde js";
// cardSection.innerHTML = "Agregando contenido desde js";


/* ARROW FUNCTIONS */

const cambiarTexto = () => {}






const precio = 400000;
let cantidad = 0; 


const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;
const cantidadSpan = document.querySelector(".cantidad");
const total = document.querySelector(".valor-total");


const actualizarTotal = () => {
    total.innerHTML = precio * cantidad; 
}


const sumarCantidad = () => {
    cantidad = cantidad + 1; 
    cantidadSpan.innerHTML = cantidad; 
    actualizarTotal(); 
}

const restarCantidad = () => {
    if (cantidad > 0) {
        cantidad = cantidad - 1; 
        cantidadSpan.innerHTML = cantidad; 
        actualizarTotal();
    }
}


