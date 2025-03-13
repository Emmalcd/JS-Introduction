// Destructuring Objects

const product = {
    name: 'Monitor 20 "',
    price: 300,
    available: true,
    id: 123
}

const name = product.name;
const price = product.price;

const { available, id } = product;

console.log(name);
console.log(price);
console.log(available);
console.log(id);