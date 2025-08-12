//funciones anonimas y Autoinvocacion
(()=>{
    alert("Hola soy una funcion anonima autoinvocada");
})();
(function(){
    console.log("Esta es otra funcion autoinvocada");
})();
//Funcion anonima cuando se le asigna a una variable o no es auto invocada 
const funcionAnonima = function(nombre){
    console.log("Hola Estudiante" + nombre);
}
funcionAnonima("Natalia");
//funcion anonima cuando se asigna a una variable o no es auto invocada y tipo felcha 
const funcionAnonimaFlecha = (nombre) => {
    console.log("Hola estudiante" + nombre);
}
funcionAnonimaFlecha("David");