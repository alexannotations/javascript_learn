const h1 = document.querySelector('h1');

// usamos un selector de id con #
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

//  Función para manejar el clic en el botón
function btnOnClick() {
    console.log('Escuchando el evento de clic');
    const result = input1.value + input2.value;
    pResult.innerText="Resultado: " + result;
    console.log(result);
}

function write(){
    console.log("escribiendo");
}

// Asignar la función al evento de clic del botón
btn.addEventListener('click', btnOnClick);
