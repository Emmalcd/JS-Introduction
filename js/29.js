"use strict";
//POO
function Profesor(nombre, matricula=0){
this.nombre=nombre;
this.matricula=matricula;
}
// console.log(profesor);

function Alumnno(nombre, apellido,acceso){
    this.nombre=nombre;
    this.apellido=apellido;
    this.acceso=acceso;
}

// Object constructor
const Emmanuel = new Alumnno('Emmanuel', 'De La Cruz', false);
const Luis = new Alumnno('Luis', 'Perez', false);
const Santiago = new Alumnno('Santiago', 'Daniel', false);
const Alejandro = new Alumnno('Alejandro', 'Lopez', false);


function presentar(Alumnno){
    console.log(`Hola, mi nombre es ${Alumnno.nombre} y mi apellido es ${Alumnno.apellido}`);
}


//Crear funciones que solo puedadn usarse en un objeto especifico
Alumnno.prototype.presentar=function(){
    console.log(`Hola, mi nombre es ${this.nombre} y mi apellido es ${this.apellido}`);
}

Luis.presentar();
Profesor.prototype.presentar=function(){
    console.log(`Soy el profesor ${this.nombre} y mi matricula es ${this.matricula}`);
}

const Juan=new Profesor("Juan");
Juan.presentar();
