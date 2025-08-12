"use strict"
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> response.json())
    .then((json)=>{
        for(let d of json){
            console.log(d);
        }
    })
    .catch(error=>{
        console.error(error);
    })
    .finally(console.info("se ha finalizado la promesa"))
