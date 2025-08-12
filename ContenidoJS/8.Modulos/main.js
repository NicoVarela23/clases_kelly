"use strict";
import { potencia, factorial } from "./operaciones.js";
import { filtrarPares } from "./others.js";
import { cuadrados } from "./others.js";

console.log(potencia(2,3));
const myArray = [2,3,4,5,6,7,8,9,10];
const myArrayNew = filtrarPares(myArray);
console.log("Array filtrado de pares:", myArrayNew);
const myArrayCuadrados = cuadrados(myArray);
console.log("Array de cuadrados:", myArrayCuadrados);
