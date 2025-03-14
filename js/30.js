//Class

class Usuario{
    constructor(nombre, apellido, rol='Usuario'){
        this.nombre=nombre;
        this.apellido=apellido;
        this.rol=rol;
    }
    presentarse(){
        console.log(`Hola, mi nombre es: ${this.nombre} ${this.apellido}`);
    }
    verificarRol(){
        if(this.rol!='Administrador'){
            console.log(`Lo siento pero como tu rol es ${this.rol} no tienes acceso total al sistema`);
        }else{
            console.log(`Acceso total al sistema`);
        }
    }
}

const usuario1=new Usuario("Emmanuel", "Estrada");
const usuario2=new Usuario("Juan", "De La Cruz", "Administrador");

usuario2.presentarse();
usuario2.verificarRol();
usuario1.presentarse();
usuario1.verificarRol();