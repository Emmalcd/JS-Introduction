async function obtenerEmpleados(){
    const url='js/empleados.json'
    // fetch(url)
    // .then(resultado => resultado.json())
    // .then(datos=>{
    //     console.log(datos);
    //     const {empleados}=datos;
    //     console.log(empleados);

    //     empleados.forEach(empleado => {
    //         console.log(empleado.id);
    //         console.log(empleado.nombre);
    //         console.log(empleado.puesto);
    //         document.querySelector('.contenido').textContent+=empleado.nombre;
    //     });
    // })
    const resultado = await fetch(url);
    const datos= await resultado.json();
    console.log(datos);
}

obtenerEmpleados();