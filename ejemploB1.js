// En este desafío debes arreglar la función solution.
// Esta recibe un array cars y debería retornar el array filtrado únicamente con los objetos que tengan la propiedad licensePlate.
// Pero no está funcionando.
// La función solo devuelve un objeto con el primer elemento que cumple los requisitos, no estamos recibiendo los demás elementos del array que también deberían pasar el filtro.

// Input
// const cars = [
//   {
//     color: 'red',
//     brand: 'Kia',
//   },
//   {
//     color: 'gray',
//     brand: 'Chevrolet',
//     licensePlate: 'AAA111',
//   },
//   {
//     licensePlate: 'RGB255',
//   },
// ];
// solution(cars);

// Output
// [
//   {
//     color: 'gray',
//     brand: 'Chevrolet',
//     licensePlate: 'AAA111',
//   },
//   {
//     licensePlate: 'RGB255',
//   },
// ]

export function solution(cars) {
    // 👇 Este es el código que no funciona
    //      return cars.find(function (car) {
    // se cambio find por filter
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }