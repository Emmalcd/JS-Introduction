// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(`El número ${i} es par`)
//     }else{
//         console.log(`El número ${i} es impar`)
//     }
// }
const carrito =[
    {productName:"Monitor de 20\"", price:300, enable:false},
    {productName:"Tablet", price:900, enable:true},
    {productName:"Ipad", price:3000, enable:false},
    {productName:"Iphone", price:30000, enable:true},
    {productName:"Mouse", price:300, enable:false},
    {productName:"Mouse pad", price:150, enable:true},
];


for(let i=0;i<carrito.length;i++){
    console.log(carrito[i].productName);
}