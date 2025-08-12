'use strict'
const listado = document.getElementById('lista_utiles');
const arrayUtiles = ['CUADERNO','LAPIZ','LIBRO','BORRADOR','MARCADOR','LAPICERO','CARTULINA'];
arrayUtiles.forEach(e=>{
    const li = docuemt.createElement('li');
    li.innerHTML = `<b>${e}</b>`;
    listado.appendChild(li);
});