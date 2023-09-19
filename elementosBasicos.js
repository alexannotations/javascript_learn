

// array
var elementos = ["compuadora","Celular"];


// objeto
var persona = {
    nombre: "Italivi",
    edad: 22,
};


// coerción implicita
4+"7"   // 47
4*"7"   // 28
2+true  // 3
false-3 // -3

// coerción explicita
var a = 20;
var c = String(a);
var d = Number(c);


// ParseInt vs Number
// ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.
parseInt("123hui") //123
// Number: Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea diginto nos dara como resultado NAN.
Number("123hui") //NaN
parseInt("hui123") = NaN


// función declarativa
function miFuncion(){
return 3;
}


// función expresión o anonima
var miFuncion = function(a,b){
    return a+b
}


// hoisting con variables
console.log(name);  // undefined
var name="User";


// hoisting con funciones
saluda();   // si funciona la llamada a la funcion
function saluda(){
    console.log("hola "+miName);
}
var miName="Italivi";   // pero la variable aun no se inicializaba


// Operadores: Asignación, Comparación y Aritméticos
0 == "0" ;   // true
0 == [] ;    // true
[] == "0" ;   // false

