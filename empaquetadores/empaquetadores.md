# Empaquetadores web

__Empaquetador de modulos__ es una pieza de software que permite tener el proyecto organizado y dividido en diferentos elementos, y con ello generar un unico archivo con la unión de todos estos.


## modulos
Es un mecanismo para encapsular codigo al dividir programas javaScript en diferentes piezas (modulos)  que se puedan importar y clasificar. Hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos.



## Sistema de modulos

- __CJS (CommonJS)__: CommonJS es un sistema de módulos utilizado en JavaScript principalmente en el entorno del lado del servidor. Permite dividir el código en módulos reutilizables y utiliza _require()_ para importar módulos y _module.exports_ para exportar funciones, objetos o variables.

- __ESM (ECMAScript Modules)__: ESM es el sistema de módulos nativo de JavaScript introducido en ECMAScript 2015 (ES6). Proporciona una forma estándar de importar y exportar código en aplicaciones JavaScript, tanto en el navegador como en Node.js. Se utiliza _import_ y _export_ para gestionar módulos.

- __AMD (Asynchronous Module Definition)__: AMD es otro sistema de módulos utilizado en JavaScript, especialmente en el navegador. Se enfoca en la carga asíncrona de módulos, lo que es útil para aplicaciones web más grandes y complejas. Se usa _define_ para definir módulos y _require_ para cargarlos de manera asíncrona. una sintaxis donde se usa _define(deps, module)_ para cargar módulos. El parámetro _deps_ es un array donde se definen los nombres de las dependencias que se necesitan para ejecutar la función _module_.

- __IIFE (Immediately Invoked Function Expression)__: IIFE es un patrón de código que se utiliza para encapsular variables y _funciones_ en un ámbito local para evitar contaminar el ámbito global. Se define una función anónima y se la invoca inmediatamente, lo que la hace útil para crear bloques de código autoejecutables que devuelven un _module_.


## Empaquetadores (Bundlers)
    Permiten gestionar, referenciar recursos para deploy optimizar el codigo
    con CSS, SCSS, stylus, JS, MJS, TSX y otros recursos como imagenes, fuentes.

- __Wepack__
    - Gestión de dependencias
    - Ejecución de tareas
    - Conversión de formatos
    - Servidor de desarrollo

- __Parcel__
    - Gestión de dependencias
    - Ejecución de tareas
    - Servidor de desarrollo
    - Diagnóstico
    - Tree shaking (separa el codigo no utilizado)

__ESBuild__
    - Velocidad extrema
    - Ejecución de tareas
    - Tree shaking
    - ES6 and CommonJS modules

__Rollup__
    - Sencillo manejo de dependencias
    - Ejecución de tareas
    - Tree shaking
    - ES6 and CommonJS modules

__Vite__
    - usa Rollup y ESBuild por detrás

__TurboPack__
