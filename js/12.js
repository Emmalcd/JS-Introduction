// "use strict"; // Use ECMAScript 5 strict mode in browsers that support it

const product = {
    name: 'Monitor 20 "',
    price: 300,
    available: true,
    id: 123
}
console.log(product);

Object.seal(product); // Prevents adding or deleting properties, but allows modifying existing properties

product.name = 'Tablet';
delete product.id;

Object.freeze(product); // Prevents adding, deleting or modifying properties
console.log(product);
console.log(Object.isSealed(product));
console.log(Object.isFrozen(product));