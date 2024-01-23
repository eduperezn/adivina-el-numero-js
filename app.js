//Variables
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

//Se pregunta el rango de numeros que estará en juego
let rangoDelJuego = prompt("¿Hasta que numero quieres que sea el rango del juego?");
let numeroSecreto = Math.floor(Math.random() * rangoDelJuego) + 1;


while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${rangoDelJuego} por favor:`));

    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el numero es: ${numeroSecreto}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //No acertamos, no se cumple la condición
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        //Incrementamos el contados cuando el usuario no acierta
        intentos++;
        //palabraVeces = "veces;"
        if (intentos > maximosIntentos) {
            alert(`Llegaste al límite de ${maximosIntentos} intentos, el correcto era: ${numeroSecreto}`);
            break;
        }
    }
}