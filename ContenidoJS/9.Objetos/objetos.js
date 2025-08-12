"use strict";
//1.Objeto literal de js
let curso = {
    nombre : "JavaScript",
    duracion : "60",
    nivel : "medio",
    capacidad : "20"
}
//2. Objeto constructor
function persona(name, lastName, age){
    this.nombre = name;
    this.apellido = lastName;
    this.edad = age;
}

//instancia
let myPerson = new persona("Juan", "Cardenas", 34);
console.log(myPerson);

const nombreLibro = "IT";
const genero = "Terror";
const editorial = "Fama";

const libro ={
    nombreLibro,
    genero,
    editorial,
    escribir: ()=>{
        return `El libro es ${nombreLibro} del genero ${genero} y lo consigue en la editorial ${editorial}`
    }
}
// console.log(libro.escribir());
// console.log("****************************")
// console.log(Object.values(libro));
// console.log(Object.keys(curso))
// console.log("****************************")
//Volver iterable un objeto
Object.entries(libro).forEach(([key,value])=>console.log(key,value));

//iterables
//Los arreglos y las cadenas de caracteres son iterables
//Ahora los objetos directamente no podemos iterarlos
//Los iterables son un protocolo que se puede aplicar a cualquier arreglo
console.log("*********************Iterables*********************");
const arreglo = [1,"6",3.3,false,"hola"];
const myIterator = arreglo[Symbol.iterator]();
// console.log(myIterator);
// console.log(myIterator.next());

let color = {
    nombre : "Rojo Fuerte",
    color : "Rojo",
    marca : "PrismaColor",
};

for(let c of arreglo){
    console.log(c);
}

//Como iterar el objeto 
color[Symbol.iterator]= function(){}