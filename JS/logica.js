function cambiarVista(idVista) {
    // Ocultar todas las vistas dentro de "componentes"
    let vistas = document.querySelectorAll(".componentes > div");
    vistas.forEach(vista => vista.style.display = "none");

    // Mostrar la vista seleccionada
    document.getElementById(idVista).style.display = "block";
}
