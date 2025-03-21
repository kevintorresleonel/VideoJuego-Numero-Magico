function cambiarPantalla(idVista) {
    // Ocultar todas las vistas dentro de "componentes"
    let vistas = document.querySelectorAll(".componentes > div");
    vistas.forEach(vista => vista.style.display = "none");

    // Mostrar la vista seleccionada
    document.getElementById(idVista).style.display = "block";
}

// defino variables
var numeroMagico;
var intentos = 10;
var historialIntentos = [];

window.onload = function() {
    iniciarJuego();
};

function iniciarJuego() {
    numeroMagico = Math.floor(Math.random() * 100) + 1;
    console.log("Número mágico:", numeroMagico); // para ver en consola e numero random
    intentos = 10;
    historialIntentos = []; // Reiniciar historial
    document.getElementById("mensaje").innerHTML = ""; // borrar mensajes
    document.getElementById("historial").innerHTML = ""; // borrar historial
}

function comprobarNumero() {
    let numUsuario = parseInt(document.getElementById("numUsuario").value);
    let mensajeContainer = document.getElementById("mensaje");

    if (intentos <= 0) {
        agregarMensaje("¡Juego terminado! El número era ${numeroMagico}");
        return;
    }

    intentos--;
    historialIntentos.push(numUsuario); // guardar intento

    if (numUsuario > numeroMagico) {
        agregarMensaje(` ${numUsuario} es mayor que el número mágico.`);
    } else if (numUsuario < numeroMagico) {
        agregarMensaje(` ${numUsuario} es menor que el número mágico.`);
    } else {
        agregarMensaje(`🎉 ¡Felicidades! Adivinaste el número mágico en ${10 - intentos} intentos.`);
        intentos = 0;
    }

    if (intentos === 10 && numUsuario !== numeroMagico) {
        agregarMensaje(`❌ ¡Perdiste! El número mágico era ${numeroMagico}.`);
    }

    actualizarHistorial();
}

function agregarMensaje(texto) {
    let mensajeContainer = document.getElementById("mensaje");
    let nuevoMensaje = document.createElement("p");
    nuevoMensaje.textContent = texto;
    mensajeContainer.appendChild(nuevoMensaje);
}

function actualizarHistorial() {
    let historialContainer = document.getElementById("historial");
    historialContainer.innerHTML = `<h3>Historial de Intentos</h3>`;
    
    historialIntentos.forEach((num, index) => {
        let intentoMensaje = document.createElement("p");
        intentoMensaje.textContent = `Intento ${index + 1}: ${num}`;
        historialContainer.appendChild(intentoMensaje);
    });
}

// cambiar vista de pantalla
function cambiarVista(pantalla) {
    let pantallas = ["pantalla-inicio", "pantalla-juego", "pantalla-opciones", "pantalla-creditos"];
    pantallas.forEach(id => document.getElementById(id).style.display = "none");

    document.getElementById(pantalla).style.display = "block";

    if (pantalla === "pantalla-juego") {
        iniciarJuego(); // reiniciar juego al entrar
    }
}
