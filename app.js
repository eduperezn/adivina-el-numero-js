
let numeroSecreto = 0;
let intentos = 0;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{
        //El usuario no acertó
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es mayor')
        }else{
            asignarTextoElemento('p','El número secreto es menor')
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero');
    asignarTextoElemento('p','Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Genera el número aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();