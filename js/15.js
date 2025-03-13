

const numbers=[10,20,30,40,50,60,70,80,90,100];
console.log('Original numbers array');
console.log(numbers);
console.log('Numbers after a pop operation');
numbers.pop(); // removes the last element
console.log(numbers);
console.log('Numbers after a push operation');
numbers.push(110); // adds an element to the end
console.log(numbers);
console.log('Numbers after a shift operation');
numbers.shift(); // removes the first element
console.log(numbers);
console.log('Numbers after a unshift operation');
numbers.unshift(5); // adds an element to the beginning
console.log(numbers);

const newNumbers=[0, ...numbers, 120];
console.log('New numbers array');
console.log(newNumbers);

newNumbers.splice(3, 4); // removes 4 elements starting from index 3
console.log('Numbers after a splice operation');
console.log(newNumbers);