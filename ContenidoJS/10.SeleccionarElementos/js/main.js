"use strict";
/*Seleccionar elementos del DOM
1. getElementById - getElementsByClassName - getElementsByTagName 
2. querySelector(#id) / querySelector( .class) / querySelector(nav) - querySelectorAll
*/

let titulo = document.getElementsByTagName("h1");
let tituloQUery = docuemnt.querySelector("h1");

console.log(titulo); // Devuelve una coleccion HTMLCollection de elementos h1

const menu = document.getElementById("menu");
const menu2 = document.querySelector("#menu");
console.log(menu); //Devuelve el elemento con id "menu"