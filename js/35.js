// Async / await

function descargarClientes(){
    return new Promise(resolve=>{
        console.log('Descargando los clientes ... espere ...');

        setTimeout(()=>{
            resolve('Los clientes fueron descargados con exito');
        }, 5000);
    });
}

function descargarPedidos(){
    return new Promise(resolve=>{
        console.log('Descargando los pedidos ... espere ...');

        setTimeout(()=>{
            resolve('Los pedidos fueron descargados con exito');
        }, 3000);
    });
}


async function app() {
    try {
        // const pedidos= await descargarPedidos();
        // const clientes = await descargarClientes();
        // console.log(clientes);
        // console.log('Este código SI depende de la descarga de los clientes');
        const resultado = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código se ejecuta de forma independiente a la descarga');