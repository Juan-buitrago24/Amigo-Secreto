// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre al array
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista(); // Actualizar la lista en pantalla
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎁 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}
