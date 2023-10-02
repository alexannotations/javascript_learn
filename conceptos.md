
## Scope

Alcance de las variables
 - global
 - local


## Hoisting

Sucede en la version 5 y anteriores, y es aplicable solo a __var__ y __function__. La declaracion de _las variables y las funciones son llevadas al inicio del codigo_, sin importar su posicion, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined
 - las funciones siempre se mueven al principio del scope
 - la declaracion de las variables se mueven al principio del scope, pero no la asignacion


## Coerción

Es el proceso en el cual JavaScript intenta _convertir automáticamente un valor de un tipo a otro_, para que puedan ser comparados o operados. Esto puede dar lugar a algunos resultados inesperados si no se tiene en cuenta.
    - implicitas (los tipos se convierten automaticamente)
    - explicitas (forza la conversion de tipos)


## Modo estricto

Es un conjunto de reglas y características que proporcionan una mayor seguridad y control en el código. Se activa mediante la palabra clave ```"use strict"``` al comienzo de un archivo o al principio de una función.
 - NO permite redeclarar una variable con el mismo nombre en el mismo ambito.
 - NO permite cambiar el tipo de dato al hacer una reasignación.


__Reasignación__ se refiere al proceso de darle un nuevo valor a una variable existente.
__Redeclaración__ o _reinicializar_ se refiere al proceso de crear una nueva variable con el mismo nombre de una variable existente.


## [Operadores (unitarios y binarios)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

Permiten realizar calculos y comparaciones, no olvidar considerar su orden de prioridad, prelación y precedencia.
 - aritmeticos      ```+``` , ```-``` , ```*``` , ```/``` , ```%```
 - de asignación    ```=``` , combinados ```+=``` , ```-=``` , ```*=``` , ```/=```
 - de comparación   ```<``` , ```>``` , ```<=``` , ```>=``` , ```!==``` , ```==``` , ```===```
 - lógicos          ```&&``` , ```||``` , ```!```
 - concatenación    ```+```
 - spread operator   ```...```

