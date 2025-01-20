// Array que guardará los nombres
let nombresAmigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombre = inputAmigo.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
  } else {
    // Agregar el nombre al array de amigos
    nombresAmigos.push(nombre);

    // Actualizar la lista de amigos en la pantalla
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
  }
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarListaAmigos() {
  // Obtener el elemento de la lista HTML
  const listaAmigos = document.getElementById('listaAmigos');
  
  // Limpiar la lista existente
  listaAmigos.innerHTML = "";  // Eliminar cualquier contenido previo de la lista

  // Iterar sobre el array de nombresAmigos
  for (let i = 0; i < nombresAmigos.length; i++) {
    // Crear un nuevo elemento <li> para cada nombre en el array
    const li = document.createElement('li');
    li.textContent = nombresAmigos[i];  // Asignar el nombre del amigo al texto del listado
    li.classList.add('name-item');

    // Agregar el elemento <li> a la lista HTML
    listaAmigos.appendChild(li);
  }
}

// Función para sortear un amigo
function sortearAmigo() {
  if (nombresAmigos.length === 0) {
    alert('No hay nombres en la lista para sortear.');
    return; // Salir de la función si no hay nombres para sortear
  }
  const amigoSorteado = nombresAmigos[Math.floor(Math.random() * nombresAmigos.length)];

  // Mostrar el nombre sorteado en la lista de resultados
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li class="name-item sorteado">El nombre sorteado es: <span>${amigoSorteado}</span></li>`;
}

