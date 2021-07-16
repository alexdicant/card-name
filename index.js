// Obtener y escuchar el boton
const boton = document.getElementById('boton')
boton.addEventListener('click', obtenerNombre)

// Obtener y guardar el nombre del usuario
function obtenerNombre() {
  nombre = prompt('Introduce tu nombre')
  cambiarTexto(nombre)
}

// Cambiar el contenido del h1 y el h2
// - Obteniendo los heading

const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')

function cambiarTexto(nombre) {
  h1.textContent = nombre
  h2.textContent = 'Hola 👋'
}
