alert("¡Bienvenido a mi cocina!");

let nombre =prompt("¿Como te llamas?");

document.getElementById("nombre-visitante").textContent = "Un gusto saludarte, " + nombre + "!";

document.getElementsByClassName("destacado")[0].style.color = "blue";

/*let respuesta = prompt("¿Qué fondo prefieres? (playa o bosque)");
respuesta = respuesta.toLowerCase().trim();
let nombreArchivo = "";

if (respuesta == 'playa') 
{    nombreArchivo = "playa.jpg";
    document.body.style.backgroundImage = `url('imagenes/${nombreArchivo}')`;}


elseif (respuesta == 'bosque') 
{
    nombreArchivo = "bosque.jpg";
    document.body.style.backgroundImage = `url('imagenes/${nombreArchivo}')`;
}*/

const miBoton = document.getElementById("btn-magia");
const parrafosecreto = document.getElementById("ingrediente-secreto");

miBoton.addEventListener("click",function(){
    parrafosecreto.textContent= "Mi ingrediente secreto es la pimienta negra recien molida!"
});