"use strict";

import { info, warning, } from '../events/alerts.js';


function promediar() {
    let cantnotas = prompt("Ingrese la cantidad de notas");
    try {
        if (!isNaN(parseInt(cantnotas))) {
            let nota = 0;
            let acumuladorNotas = 0;
            for(let i = 0; i<cantnotas; i++){
                nota = prompt("Ingrese la nota " + (i + 1));
                acumuladorNotas += parseFloat(nota);
            }            
            let promedio = acumuladorNotas / cantnotas;
            alert("El promedio es: "+promedio);
        }else{
            alert("Error en datos. Por favor, ingrese un número válido.");

        }

    }catch (error) {
        alert("Error en datos. Por favor, ingrese un número válido.");
        warning("Error: " + error.message);
    }
}

export { promediar as promedioSweet }