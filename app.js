
let numeroSecreto = generarNumeroSecreto();


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroSecreto===numeroDeUsuario);
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

asignarTextoElemento('h1','Juego del numero');
asignarTextoElemento('p','Indica un número del 1 al 10');