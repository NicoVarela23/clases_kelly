//Los arreglos tienen varios metodos que permiten manipularlos: filter, map, reduce,
//  foreach, find, some, every, sort, etc... Consultar 

const buscarElemento = (data)=>{
    let result = data.filter((e)=> e % 2 === 0);
    return result;
}

const generarCuadrados = (data)=>{
    return data.map((e)=> e * e);
}

export {
    buscarElemento as filtrarPares,
    generarCuadrados as cuadrados
}