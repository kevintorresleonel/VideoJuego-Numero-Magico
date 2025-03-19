function cambiarVista(idVista) {
    // Ocultar todas las vistas dentro de "componentes"
    let vistas = document.querySelectorAll(".componentes > div");
    vistas.forEach(vista => vista.style.display = "none");

    // Mostrar la vista seleccionada
    document.getElementById(idVista).style.display = "block";
}


var numeroMagico = Math.floor(Math.random()*100+1); 
console.log("numeroMagico"); 

function comprobarNumero(botonComprobar){

    const node = document.createElement("p"); 
const textnode = document.createTextNode("El número que ingresaste es mayor al número magico"); 

    let numUsuario = document.getElementById("numUsuario").value;
    let mensaje = document.getElementById("mensaje").value;
    if(numeroMagico > numUsuario){
        const textnode = document.createTextNode("El número que ingresaste es mayor al número magico"); 
    }
    if(numeroMagico < numUsuario){
        const textnode = document.createTextNode("El número que ingresaste es menor al número magico"); 
    }
    if(numeroMagico == numUsuario){
        const textnode = document.createTextNode("El número que ingresaste es el correcto, ¡FELICIDADES!"); 
    }
    
    node.appendChild(textnode); 

    document.getElementById("mensaje").appendChild(node); 

}