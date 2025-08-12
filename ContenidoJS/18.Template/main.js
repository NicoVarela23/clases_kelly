'use strict';
const BASE_URL ="https://pokeapi.co/api/v2/"
const template = document.getElementById('template').content;
const fragment = new DocumentFragment();
const listado = document.getElementById('listPoke')
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
//Comprobar que el navegador soporta el template
const okTemplate = "content" in document.createElement("template");
if(okTemplate){
    dataPoke.forEach(element=>{
    template.querySelector("a").textContent = element;
    template.querySelector("a").setAttribute("href",element);
    const myElement = template.cloneNode(true);
    fragment.appendChild(myElement);
});
}else{
    dataPoke.forEach(element=>{
        const li = docuemnt.createElement("li");
        li.classList.add('list-group-item');
        li.innerHTML = `<strong>${element}</strong>`
        fragment.appendChild(li);
    })
}

listado.appendChild(fragment);