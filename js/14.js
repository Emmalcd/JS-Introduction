const numeros = [15,24,45,67];

console.log(numeros);
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.table(meses);

const arreglo = [1, 'Hola', true, null, undefined, {nombre: 'Juan', trabajo: 'Programador'}, [1,2,3]];
console.table(arreglo);

meses.forEach(function(mes){
  console.log(mes);
});