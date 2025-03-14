//control estructures
const checarEstado=temperatura=> {
    if(temperatura<0){
        console.log("El agua esta congelada");
    }else if(temperatura<100){
        console.log("El agua esta en estado liquido");
    }
    else{
        console.log("El agua esta en estado gaseoso");
    }
}

checarEstado(-1);


