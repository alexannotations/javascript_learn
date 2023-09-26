// if
let edad = 25;
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}



// switch
const dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  case "martes":
    console.log("Hoy es martes");
    break;
  case "miercoles":
    console.log("Hoy es miércoles");
    break;
  default:
    console.log("Hoy no es lunes, martes o miércoles");
}



// for
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }



// También existen los ciclos **for-in** y for-of. El ciclo for-in se utiliza para recorrer las propiedades de un objeto, mientras que el ciclo for-of se utiliza para recorrer los elementos de una colección como un array.
// for in
const user = {
    name: "Pepito",
    age: 20,
    role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}



// for of
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}



// while
let i = 1;
while (i <= 10){
  console.log(i);
  i++;
}



// do while
let j = 1;
do {
	console.log(j);
	j++;
	} while (j <= 10);



  // objetos
  const curso = {
    nombre: "30 días de JS", 
    duración: "20 horas", 
    clases: 100,
    detalles: {
      tecnologias: ["js", "node", "web browser"],
      calificacion: 5,	
    },
    comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
  };

console.log(curso.nombre); // "30 días de JS"
console.log(curso["nombre"]); // "30 días de JS"