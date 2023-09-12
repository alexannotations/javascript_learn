
## Scope

Alcance de las variables
 - global
 - local


## Hoisting

Sucede en la version 5 y anteriores, y es aplicable solo a __var__ y __function__. La declaracion de las variables y las funciones son llevadas al inicio del codigo, sin importar su posicion, sin embargo, la inicializacion de las variables no es llevada al inicio del codigo para su compilacion, sino solo su declaracion, lo cual suele dar espacio a errores cuando se declara una variable sin inicializarla y se procesa en el codigo antes de haber llegado a su inicializacion, lo cual nos suele dar una variable con valor undefined
 - las funciones siempre se mueven al principio del scope
 - la declaracion de las variables se mueven al principio del scope, pero no la asignacion


## Coerción

or otro lado, coercion es el proceso en el cual JavaScript intenta convertir automáticamente un valor de un tipo a otro, para que puedan ser comparados o operados. Esto puede dar lugar a algunos resultados inesperados si no se tiene en cuenta.
    - implicitas (los tipos se convierten automaticamente)
    - explicitas (forza la conversion de tipos)


## Operadores

Permiten realizar calculos y comparaciones
 - aritmeticos      + , - , * , / , %
 - de asignación    = , += , -= , *= , /=
 - de comparación   < , > , <= , >= , !== , == , ===
 - lógicos          && , || , !
 - 