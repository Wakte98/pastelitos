//1. Atrapar la caja de texto donde el usuario escribe su nombre
const inputNombre = document.getElementById("nombre-interesado");
//2. Atrapar el texto en negrita donde quiero mostrar el resultado
const resultadoNombre = document.getElementById("resultado-nombre");
//3. Escuchar el evento de escribir en la caja de texto
inputNombre.addEventListener("input", function(){
    resultadoNombre.textContent = inputNombre.value;
});