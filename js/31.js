class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    presentarse() {
        return `Hola, soy ${this.nombre}`;
    }
}

class Perro extends Animal{
    constructor(nombre, raza){
        super(nombre);
        this.raza=raza;
    }
    presentarse(){
        return `${super.presentarse()} y mi raza es: ${this.raza}`;
    }
}

const bethoveen = new Perro('Bethoven', 'beagle');

console.log(bethoveen.presentarse());
