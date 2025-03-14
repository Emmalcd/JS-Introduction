//While loop

let i=0;
// while(i<=100){

//     if(i%2==0){
//         console.log(`El número ${i} es PAR`);
//     }else{
//         console.log(`El número ${i} es IMPAR`);
//     }
//     i++;
// }

const carrito =[
    {productName:"Monitor de 20\"", price:300, enable:false},
    {productName:"Tablet", price:900, enable:true},
    {productName:"Ipad", price:3000, enable:false},
    {productName:"Iphone", price:30000, enable:true},
    {productName:"Mouse", price:300, enable:false},
    {productName:"Mouse pad", price:150, enable:true},
];

while(i<carrito.length){
    console.log(carrito[i].productName);
    i++;
}

i=1000;

do{
    console.log(i);
}while(i<10);