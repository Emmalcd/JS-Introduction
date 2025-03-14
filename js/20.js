"use strict";
const reproductor ={
    reproducir:function(id){
        console.log(`Reproduciendo la canción ${id}`);
    }, 
    pausar: function(){
        console.log(`Pausando la canción...`);
    }, 
    eliminar:function(id){
        console.log(`Eliminando la canción: ${id}`);
    }
}

reproductor.crearPlaylis=function(nombre="Mi playlist"){
    console.log(`Creando la playlist: ${nombre}`);
}
// console.log(reproductor);

reproductor.reproducir(4);
reproductor.pausar();
reproductor.crearPlaylis("All");
reproductor.eliminar(658);
