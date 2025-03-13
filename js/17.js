//Declaration of a function
sumar(); //Aqui no genera error
function sumar(){
    console.log(10+10);
}
sumar();


sumar2(); //Aqui si genera error por que estamos asignando el valor a una constante sin que se haya definido la función
const sumar2=function(){
    console.log(3+3);
}
sumar2();

//IIFE
(function(){
    console.log("Esto es una función");
})();

console.log(nombre1);

console.log(nombre2);// no se encuentra por que se protegio en el archivo 17aux
