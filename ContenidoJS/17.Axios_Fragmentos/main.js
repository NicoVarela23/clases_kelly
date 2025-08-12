'use strict';
const BASE_URL ="https://pokeapi.co/api/v2/"
const listado = document.getElementById('listPoke');
const fragment = new DocumentFragment();
//Consumo de api 
async function obtenerListado(){
    const response = await axios.get(`${BASE_URL}pokemon`)
    .then(response =>{
        const resultados = response.data.results;
        let poke=[];
        for(let i in resultados){
            poke.push(resultados[i].name);
        }
        return poke;
    })
    .catch(error=>{console.log(error)})
    return response;
}

const dataPoke = obtenerListado();

dataPoke.forEach(e=>{
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = e;
    //eliminando el reflow
    fragment.appendChild(li);
})
listado.appendChild(fragment);
