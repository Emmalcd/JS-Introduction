const botonSuma = document.querySelector('#botonSuma');
const botonNotificacion = document.querySelector('#botonNotificacion');

let total=0;
const suma= function(){
    total=total+1;
    console.clear();
    console.log(total);
}

botonSuma.addEventListener('click', suma);

botonNotificacion.addEventListener('click', ()=>{
    Notification.requestPermission()
    .then(resultado=>console.log(`El resultado es ${resultado}`))
});

if(Notification.permission=='granted'){
    new Notification('Esta es una notificación',{
        icon: 'img/notificacion.webp',
        body: 'Esta es el cuerpo de la notificación'
    })
}

