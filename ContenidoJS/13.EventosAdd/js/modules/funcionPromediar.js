"use strict";

import { Información, advertencia, } from './alertas.js';


function promediar() {
    let cantidadNotas = prompt("Ingrese la cantidad de notas");
    try {
        if (!isNaN(parseInt(cantidadNotas))) {
            let nota = 0;
            let acumuladorNotas = 0;
            for(let i = 0; i<cantidadNotas; i++){
                nota = prompt("Ingrese la nota " + (i + 1));
                acumuladorNotas += parseFloat(nota);
            }            
            let promedio = acumuladorNotas / cantidadNotas;
            alert("El promedio es: "+promedio);
        }else{
            alert("Error en datos. Por favor, ingrese un número válido.");

        }

    }catch (error) {
        alert("Error en datos. Por favor, ingrese un número válido.");
        error("Error: " + error.message);
    }
}

export { promediar as promedioFn }