
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    alert("Click desde el boton");
}

asignarTextoElemento('h1','Juego del numero');
asignarTextoElemento('p','Indica un número del 1 al 10');