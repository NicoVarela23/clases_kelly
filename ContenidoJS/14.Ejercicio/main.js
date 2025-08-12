'use strict';
const btnOK = document.getElementById('ok');
const listaNotas = document.getElementById('listaNotas');
//Crear boton
const btnPromedio = document.createElement('button');
//Propiedades al boton 
btnPromedio.type='button';
btnPromedio.textContent='Promedio';
btnPromedio.className='btn btn-info';
//Asociamos un evento click al btnOK
btnOK.addEventListener('click', ()=>{
    let cantNotas = document.getElementById('cantNotas').value;
    //Validaciones deben ser entre 0 y 5, que sea numerico -> casteo -> verificar con el isNaN
    for(let i=0;i<cantNotas;i++){
        const div = document.createElement('div');
        div.className='col-md-6 col-sm-12';
        const input = document.createElement('input');
        input.setAttribute('type','number');
        input.setAttribute('id','nota');
        input.max=5;
        input.min=0;
        input.step=0.1;
        input.className='form-control';
        div.appendChild(input);
        listaNotas.appendChild(div)
    }
    listaNotas.appendChild(btnPromedio);
});


btnPromedio.onclick = function(){
    let arrayInput = document.querySelectorAll('#nota');
    let promedio=0;
    //consultar el .map para los arreglos
    arrayInput.forEach(e=>{
        if(parseFloat(e.value)){
            promedio += parseFloat(e.value);
        }
    });
    promedio = promedio / arrayInput.length;
    //pintar en pantalla o en el dom el resultado
    console.log(promedio);
}