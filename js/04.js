// string 
const producto= "Monitor de 20\"";
const producto2 = String('Monitor de 30 pulgadas');
const producto3 = new String('Monitor de 50 pulgadas');

console.log( producto);
console.log(producto2.length);
console.log(typeof producto3);

// Index of

console.log(producto.indexOf('Monitor'));
console.log(producto.indexOf('CLASE'));

// Includes
console.log(producto.includes('Monitor'));
console.log(producto.includes('CLASE'));