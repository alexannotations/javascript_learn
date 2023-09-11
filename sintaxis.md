# JavaScript


## Declarar variables

el tipo de dato se determina en tiempo de ejecución, por el tipado 

```js
// declarar variable, opcional inicializar su valor
var age=30
let time
time=12

// constante, necesario declarar e inicializar
const name=Italivi
```



## Tipos
primitivos y de tipo objeto

__numbers__ numeros enteros o decimales, en los que se puede usar la notacion cientifica

__strings__ secuencia de caracteres dentro de comillas simples o dobles, se pueden concatenar con el operador __+__. También es posible utilizar la notación _template literal_ para crear strings que incluyen variables y expresiones:
```js
const nombre = "student";
const apellido = 'Academy';
console.log(`Hola, ${nombre} ${apellido}!`); // "Hola, student Academy!"
```

__Objects__ son estructuras de datos que permiten almacenar un conjunto de pares clave-valor, conocidos como porpiedades del objeto. Para crear un objeto, se utilizan las llaves ```{}``` y se especifican las propiedades del objeto mediante la sintaxis _nombrePropiedad: valorPropiedad_. Los valores de las propiedades pueden ser de cualquier tipo de dato, incluyendo objetos.
Para acceder a las propiedades de un objeto, podemos utilizar el operador ```.``` o la notación de corchetes ```[]```.
```js
const persona = {
  nombre: "Italivi",
  rank: 9567,
	cursoFavorito: {
		nombre: "Básico de JavaScript",
		clases: 30,
		duración: "2 horas"
	}
};

console.log(persona.nombre); // "Italivi"
console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
console.log(persona["rank"]); // 9567
```

__Booleanos__ representan ```true``` o ```false```

Para obtener el tipo de dato, se usa la funcion ```typeof()```
```js
typeof "#Challenge" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"
typeof [] // "object"
```



## Funciones

Function declaration
```js
// declaracion de funcion
function nombreFuncion(parametro1, parametro2) {
  // Código de la función
  // return
}

// invocar una funcion
nombreFuncion(valor1, valor2);
// el valor devuelto se asigna a una variable
let resultado = nombreFuncion(valor1, valor2);
console.log(resultado);
```

IIFE (Immediately Invoked Function Expression)
una función que se autoejecuta inmediatamente después de ser definida, esta es anónima y no se puede reutilizar
```js
(function () {
  console.log("Soy una IIFE");
})();
```

Función expresión
Se define como una expresión y puede ser asignada a una variable, puede ser llamada y reutilizada.
```js
let saluda = function () {
  console.log("Hola");
};

saluda();
```

Arrow function
Se define utilizando la sintaxis ```() =>```. Es una forma más concisa de escribir funciones y es útil para funciones de una sola línea.
```js
let saluda = () => console.log("Hola");

saluda();
```



# Sintaxis
El punto y coma es opcionall, a excepción de algunos casos especiales como en ciclos o cuando se quiere separar declaraciones en una misma línea. Se puede usar para facilitar la legibilidad
```js
const saludo
console.log(saludo) // "Hola"
console.log(saludo); // "Hola"
```

Las llaves o corchetes se utilizan para encapsular bloques de codigo, funciones, bucles u otros elementos, como declarar objetos.
```js
// declaracion de un objeto
const auto = {
  color: "rojo",
  llantas: 4,
  marca: "Audi"
}
```


