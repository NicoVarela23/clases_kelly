let mensaje ="Uniemoresarial";

const saludo = function(msn){
    console.log(`Hola estudiantes de ${msn}`);
}
const ejecutoSaludo = (callback,otherMsn)=>{
    callback(otherMsn);
}
//Invoacion
ejecutoSaludo(saludo, mensaje);