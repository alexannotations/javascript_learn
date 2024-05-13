## [__DOM__ Document Object Model](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
DOM es una representación del documento HTML como un grupo de nodos y objetos. Determinando así la forma en la cual se puede acceder y modificar la estructura, contenido y estilo de un documento HTML.



## Manipulacion basica

Dentro del archivo HTML
```html
<script>
    console.log("hello, world");
</script>
```

Invocando a un archivo _js_ externo desde HTML
```html
<script src="./script.js"></script>
```




-----------------------------------------------------------------
## Leyendo HTML desde JS

___index.html___
```html
    <!DOCTYPE html>
    <head>
    <title>Leyendo HTML desde JavaScript</title>
    </head>
    <body>
    <h1>Manipulación del DOM básica</h1>

    <p>Esto es un párrafo</p>
    <p class="pclass">Esto es un párrafo con clase</p>
    <p id="pid">Esto es un párrafo con ID</p>

    <input placeholder="Escribe algo aquí" value="123" />

    <script src="./script.js"></script>
    </body>
    </html>
```


Con ```document``` podemos acceder al documento _html_ con ayuda del navegador, creando variables que representen a los selectores de cada elemento, para manipular las propiedades de cada elemento

___script.js___
```js
// variables para los selectores
const etiquetah1 = document.querySelector('h1');     // por el nombre de la etiqueta
const p = document.querySelector('p');  // solo selecciona la primer etiqueta <p>
const pall = document.querySelectorAll('p');  // selecciona todas las etiquetas <p>, creando un lista de los elementos
const selectorinput = document.querySelector('input'); 

// observe el simbolo que antecede, como la sintaxis de CSS
const selectorclase = document.querySelector('.pclass');     // (.) por el nombre de la clase
const selectorid = document.querySelector('#pid');     // (#) por el nombre del id

console.log(etiquetah1);
// Ver todos los elementos
console.log({ etiquetah1, p, selectorclase, selectorid, selectorinput });
console.log(selectorinput.value);

```




-----------------------------------------------------------------
## Escribiendo HTML desde JS

___index.html___
```html
    <!DOCTYPE html>
    <head>
    <title>Leyendo HTML desde JavaScript</title>
    </head>
    <body>
    <h1 atributoinventado="mimarca">Manipulación del DOM básica</h1>

    <p>Esto es un párrafo</p>
    <p class="pclass">Esto es un párrafo con clase</p>
    <p id="pid">Esto es un párrafo con ID</p>

    <input placeholder="Escribe algo aquí" value="123" />

    <script src="./script.js"></script>
    </body>
    </html>
```


Con la propiedad ```innerHTML``` podemos acceder a la propiedad.

___script.js___
```js
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pall = document.querySelectorAll('p');
const input = document.querySelector('input'); 
const clase = document.getElementsByClassName('pclass');
const pid = document.getElementById('pid');


// puede ser sujeto de vulnerabilidad al permitir al usuario inyectar HTML
h1.innerHTML = 'Cambiando la propiedad <br> de h1';
// convierte a texto plano, si importar si hay html
h1.innerText = 'Cambiando la propiedad <br> de h1';

console.log(h1.getAttribute('atributoinventado'));  // muestra en el valor de atributo inventado
// modificando los atributos
h1.setAttribute('atributoinventado','otro-valor');

// manipular clases
p.classList.add('-agregadojs');
p.classList.remove('pclass');

// modifica el atributo value de input, o cualquier otro atrributo
input.value = '456';

// Crear un elemento desde cero
console.log(document.createElement('img'));

// sustituye otra etiqueta
const img - document.createElement('img');
img.setAtribute('src', 'path a la imagen');
console.log(img);

// insertamos la imagen dentro de otra eqiqueta que ya existe
pid.append(img);
pid.appendChild(img);


```

