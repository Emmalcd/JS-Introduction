//Objects

const productName= "Monitor";
const productPrice= 1000;
const productEnabled= true;

// console.log(productName);
// console.log(productPrice);
// console.log(productEnabled);


const product = {
    name: "Monitor",
    price: 1000,
    enabled: true
};
// console.log(product);
// console.log(product.name);
// console.log(product.price);
// console.log(product.enabled);

// console.log(product["name"]);
// console.log(product["price"]);
// console.log(product["enabled"]);

product.imagen="imagen.jpg";
console.log(product);

delete product.enabled;
console.log(product);