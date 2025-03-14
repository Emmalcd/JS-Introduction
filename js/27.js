const cliente={
    nombre:"Emmanuel",
    apellido: "Estrada",
    correo: 'joselemmanuel9@gmail.com',
    presentacion:function(){
        console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
    }
}

cliente.presentacion();