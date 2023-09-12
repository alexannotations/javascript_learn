

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

