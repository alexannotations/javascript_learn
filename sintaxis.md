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

Para obtener el tipo de dato, se usa la funcion ```typeof()```
```js
typeof "#Challenge" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"
typeof [] // "object"
```

### primitivos y de tipo objeto


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


__null__ es un tipo de dato que representa un valor vacío o nulo. A menudo, es para representar un valor que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual.
```js
const nombre = null;
console.log(nombre); // imprime "null"
```


__undefined__ representa un valor que aún no ha sido asignado o que no tiene un valor válido.
```js
let nombre;
console.log(nombre); // imprime "undefined"
```

__Diferencias entre Null y Undefined__
```null``` representa un valor intencionalmente vacío, mientras que ```undefined``` representa un valor que aún no ha sido asignado o que no tiene un valor válido.


__Symbol__ son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en una aplicación.
```js
const simbolo = Symbol();
let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};
console.log(perrito[simbolo]); // "Identificador único"
```
También puede proporcionar una descripción opcional al crear un símbolo, lo que puede ser útil para depurar y mantener el código:
```js
const simbolo = Symbol("Identificador único de gatitos");
```
Es importante tener en cuenta que los símbolos son valores únicos, lo que significa que dos símbolos creados de manera independiente nunca serán iguales, incluso si tienen la misma descripción. Esto hace que los símbolos sean ideales para usar como identificadores únicos en tus futuras aplicaciones.
El tipo de dato _Symbol_ se introdujo en _ECMAScript 6_ y se utiliza para crear valores únicos e inmutables que se pueden utilizar como identificadores de propiedades de objetos. Un Symbol se crea usando la función ```Symbol()```. Cada símbolo que se genera es único y no se puede duplicar, lo que lo hace ideal para evitar colisiones de nombres de propiedades en objetos.


__bigint__ son un nuevo tipo de dato en JavaScript que se usa para representar números enteros de un tamaño mayor al que puede manejar JavaScript de manera nativa. Los bigint se escriben con el sufijo ```n``` o utilizando la función ```BigInt()```. Se introdujo en _ECMAScript 2020_
```js
const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
```
Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de comparación, como ```==``` o ```===```. En su lugar, debes usar los métodos ```BigInt.asIntN``` y ```BigInt.asUintN``` para hacer comparaciones entre bigint y números normales.

También es importante tener en cuenta que los _bigint_ no son compatibles con todas las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte de verificar la documentación de la función o método que quieres usar antes de intentar usar bigInt con ellos.




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


