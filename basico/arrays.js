let colores = ["rojo", "azul", "verde"];


// push
colores.push("amarillo");
console.log(colores); // ["rojo", "azul", "verde", "amarillo"]


// pop
colores.pop();
console.log(colores); // ["rojo", "azul", "verde"]


// map
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(function(numero) {
  return numero * numero;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]


// reduce() permite combinar todos los elementos del array en un solo valor
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma); // 15

  