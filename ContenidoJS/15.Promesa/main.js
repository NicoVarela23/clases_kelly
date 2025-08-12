"use strict"
const promesa = new Promie((resolve, reject)=>{
    //Consumir servicio a traves de el protocolo http
    const request = new XMLHttpRequest();
    request.open('GET','https://jsonplaceholder.typicode.com/posts');
    request.onload = function(){
        if(request.status == 200){ //201 ok 500 400 300 
            resolve(JSON.parse(request.response));
        }else{
            reject();
        }
    };
    request.send();
});

promesa
    .then(resolve=>{
        console.log(resolve)
    })
    .catch(error=>{
        console.error(error,reject);
    })
    .finally(console.info("se ha finalizado la promesa"))