"use strict";
function operacionPotencia(/*recibir argumentos o parametros*/base,potencia){
    return Math.pow(base,potencia);
}
const operacionFactorial = (numero)=>{
    let resultado = 1;
    for(let i=1; i <= numero; i++){
        resultado *= i; //acumulador
    }
    return resultado;
}
export {operacionPotencia as potencia, operacionFactorial as factorial};