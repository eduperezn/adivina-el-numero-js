
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intentoDeUsuario(){
    alert("Click desde el boton");
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

asignarTextoElemento('h1','Juego del numero');
asignarTextoElemento('p','Indica un número del 1 al 10');