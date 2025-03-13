//Spread operator
//The spread operator is used to expand an array or object into individual elements.
const product = {
  name: 'Xiaomi Mi 10',
  price: 699,
  manufacturer: 'Xiaomi',
  model: 'Mi 10',
  year: 2020,
};
console.log(product);

const { name, price, ...rest } = product; //rest operator is used to collect all the remaining properties of an object into a new object.

const measures = {
  width: 70,
  height: 150,
  weight: 200,
  color: 'black',
};

const completeProduct = {...measures, ...product};
console.log(completeProduct);