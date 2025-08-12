"use strict";
/*Crear e insertar elementos del DOM*/

const articuloPatos = docuemnt.crearElement("article");
//Atributos
articuloPatos.id ="art-duck";
articuloPatos.className = "articulos";
articuloPatos.style = "color: blue; background-color: lightblue; padding: 10px; margin: 10px; border-radius: 5px";
//Insertar p en el articulo 
const parrafoPatos = docuemnt.createElement("p");
parrafoPatos.textCotent = "Los patos son aves acuaticas que pertenecen a la familia Anatidae. Son conocidos por sucaracteriztico pico ancho y aplanado, asi como por su plaumaje colorido";
//Insertar el elemento DOM
docuemnt.body.appendChild(articuloPatos);
//Insertar el parrafo en el articulo
articuloPatos.appendChild(parrafoPatos);
//nesecito otro parrafo pero no puedo copiar de forma convencional sino que tengo que hacerlo a traves de la clonacion
const parrafoRoedores = parrafoPatos.cloneNode(true);
parrafoRoedores.textContent = "<i>Los roedores son un orden</i><b>de mamifero </b>"
