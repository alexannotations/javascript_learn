## Condicionales

__if__
```js
if(){   }
```

__else__
```js
if(){   } else{ } 
```

__else if__
```js
if(){   } else if(){ }
 ``` 

[Ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Se lee: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.
```js 
// <condicion> ? <Bloque verdadero> : <Bloque falso>
condition ? true : false
``` 

__switch__
```js
switch (expresion) {
    case 1: {
        // Bloque 1
        break
    }
    case 2: {
        // Bloque 2
        break
    }
    default: {
        // Bloque default
    }  
}
``` 


## Bucles

__for__
``` for (<inicio>; <comparación>; <paso>) { <bloque de código> } ```
Para el ciclo _for_ conocemos la cantidad de veces ```length``` que la estructura repetirá una o varias instrucciones.
```js
var nombres = ["Andres", "Diego", "Paty", "Ramiro", "Silvia"]

for(var i = 0; i < nombres.length; i++){
    console.log(`Hola ${nombres[i]}`)
}
```


__for ... of__
El ciclo ``` for ... of ``` es una variación del ciclo _for_ que se utiliza para recorrer los valores de los elementos de un _array_, es decir, recorre los valores de un objeto iterable.
```js
for ( var <elementoSingular> of <array>){
    // Bloque de código
}
```
El ciclo ```for ... of``` solo accede al valor de cada uno de los elementos del array. Por consiguiente, NO puede cabiar el array original, porque se necesita su índice para acceder y cambiar su valor. Pero se puede crear otro array vacio para llenarlo con los nuevos valores.
```js
var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var number of numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]
```


__for ... in__
Recorre las propiedades de un objeto



__while__
Recorre un bloque de código mientras se cumple una condición específica
``` while( <condicion> ){ <Bloque de código >} ``` 



__do ... while__
 Recorre un bloque de código mientras se cumple una condición específica



## Arrays
Un array se inicia mediante la sintaxis de corchetes ```[]``` y es tipo de dato _objeto_, sus elementos principales son el _indice_ y el _elemento_, ademas un array puede contener más arrays.
```js
var frutas = ["Manzana", "Naranja", "Fresa"]

frutas[0] // "Manzana"
frutas[1] // "Naranja"
frutas[2] // "Fresa"
frutas[3] // undefined
```
La mutabilidad hace referencia a la capacidad de una estructura de datos a cambiar. Esto permite cambiar los valores de los elementos de un array cuando accedemos a sus elementos mediante un índice.
```js
// Accedemos y mutamos el segundo elemento
frutas[1] = "Piña"

console.log(frutas) // ["Manzana", "Piña", "Fresa"]
```
Los métodos de arrays son funcionalidades que se acceden mediante la notación punto ```<array>.<metodo>(<argumentos>)```

### métodos mutables
El método __push__ agrega uno o varios elementos al _final_ del array original, recibe como argumento los valores a agregar y retorna el número de elementos del array mutado.
El método __unshift__ agrega uno o varios elementos al _inicio_ del array original, recibe como argumento los valores a agregar, retorna el número de elementos del array mutado.
El método __pop__ extrae el elemento del _final_ del array original.
El método __shift__ extrae el elemento del _inicio_ del array original.
### métodos no mutables
El método __indexOf__ muestra el _índice_ del elemento especificado como argumento. Si el elemento no se encuentra en el array, el método devuelve el valor _-1_.

Se pueden asignar _string keys_, pasando un string entre corchetes en vez del índice.
En el caso de arrays y objetos, un ```console.table()``` luce mejor que un clásico ```console.log()```




## Objetos
Para declarar un objeto la sintaxis es:
```this``` es una variable especifica, que hace referencia al objeto, apunta al prototipo padre
```js
var myObject = {
  property : "value",
  funcion: function(){
    // ...
    }
  }; 
```
Se guarda una variable tipo objeto en memoria con referencia al nombre de la variable, Ejemplo:
```js
 var myCar = { 
  color: "Red", 
  year: 2015, 
  detalle: function(){
      console.log(`Auto ${this.color} ${this.year}`)
    }
  }
 ```
 Para acceder a un objeto:
 ```js
  myCar.year;
  myCar.detalle();
 ```

### Función constructora
Los parametros son las propiedades que tendra el objeto
```new``` es un operador que genera una nueva instancia de la funcion constructora
 ```js
  function auto(marca, model, year, licensePlate ){
    this.marca = marca;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
  }

  var autoNuevo = new auto("Tesla","Model 3",2023,"placas");
  
 ```


### Copiar objetos
Cuando se utiliza el ```=``` se copia la referencia a dicho objeto con sus respectivos valores, en vez de copiar los valores de los objetos, por lo que javaScript permite solucionar este problema utilizando la función ```Object.assign``` al copiarlos valores de los objetos. Pero si un objeto esta conformado por subobjetos, pueden existir problemas, por lo que para copiar objetos de JavaScript se utilizan las funciones ```JSON.stringify``` y ```JSON.parse```. La primera (```JSON.stringify```) se encarga de transformar los objetos en cadenas de texto mientras que, la segunda (```JSON.parse```) se encarga de transformar cadenas de texto en objetos.

