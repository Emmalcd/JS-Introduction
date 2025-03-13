// Array Methods 
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


meses.forEach(function(mes){
    if(mes=="Enero"){
        console.log(true);
    }
});

resultado=meses.includes("Enero"); //Verificar que enero existe en el arreglo

resultado= carrito.some(function(product){
    return product.productName==="Ipad"
});


resultado=carrito.reduce(function(total, product){
    return total+=product.price;
},0);

resultado=carrito.filter(function(product){
    return product.productName.includes("Mouse");
});



console.log(resultado);