const carrito =[
    {productName:"Monitor de 20\"", price:300, enable:false},
    {productName:"Tablet", price:900, enable:true},
    {productName:"Ipad", price:3000, enable:false},
    {productName:"Iphone", price:30000, enable:true},
    {productName:"Mouse", price:300, enable:false},
    {productName:"Mouse pad", price:150, enable:true},
];


//Foreach
carrito.forEach(product=> console.log(product.productName));

//Map

const newArray=carrito.map(product=>`${product.productName} - ${product.enable}`);
const newArray2 = carrito.map(function(product){
    return product.price;
});

console.log(newArray2);