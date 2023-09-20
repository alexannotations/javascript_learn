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
``` for ```

__for ... of__
``` for ... of ```

__while__
``` while ``` 



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

