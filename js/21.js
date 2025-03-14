"use strict";
const sumar=(n1, n2) => n1+n2;


console.log(sumar(3,10));

// Array Methods  in Arrow functions
const carrito =[
    {productName:"Monitor de 20\"", price:300, enable:false},
    {productName:"Tablet", price:900, enable:true},
    {productName:"Ipad", price:3000, enable:false},
    {productName:"Iphone", price:30000, enable:true},
    {productName:"Mouse", price:300, enable:false},
    {productName:"Mouse pad", price:150, enable:true},
];

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

let resultado;


meses.forEach(mes=>{
    if(mes=="Enero"){
        console.log(true);
    }
});


resultado= carrito.some(product=>product.productName==="Ipad");

resultado=carrito.reduce((total, product)=>total+=product.price,0);

resultado=carrito.filter(product=>product.productName.includes("Mouse"));

console.log(resultado);