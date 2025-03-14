//POO

// Object literal
const profesor={
    nombre:"Juan",
    apellido:"De La Cruz",
    acceso: true
}

console.log(profesor);

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

console.log(Emmanuel);
console.log(Luis);
console.log(Santiago);
console.log(Alejandro);