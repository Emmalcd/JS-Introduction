// Async / await

function descargaClientes(){
    return new Promise(resolve=>{
        console.log('Descargando los clientes ... espere ...');

        setTimeout(()=>{
            resolve('Los clientes fueron descargados con exito');
        }, 5000);
    });
}

async function app() {
    try {
        const resultado = await descargaClientes();
        console.log(resultado);
        console.log('Este código SI depende de la descarga de los clientes');
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código se ejecuta de forma independiente a la descarga');