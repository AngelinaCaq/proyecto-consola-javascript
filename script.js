//Inicia Elegir juego, valida si es valido (si es un numero)
let juegos = parseInt(prompt
    (`¡Juguemos!
Elige una opción:

1. Jugar Cachipún
2. Adivina el número
3. Una aventura`
));

if (isNaN(juegos) || juegos <= 0 || juegos > 3 )  {
    alert("Valor invalido, por favor recarga y elige un número del 1 al 3");
}else if (juegos === 1) {
    alert("¡Elegiste Cachipun! Jugaremos 5 rondas");
    cachipun();
}else if (juegos === 2){
    alert("¡Elegiste Adivina el numero! Tendras 5 intentos para adivinar")
    adivinaElNumero()
}
else if (juegos === 3 ){
    alert("¡Jugaremos a una aventura!")
    aventura();
}

function cachipun() {
    
    let puntosJugador = 0
    let puntosConsola = 0

    for (let index = 0; index < 5; index++) {
        let jugador = prompt(`Elige: piedra, papel o tijera / Ronda ${index + 1} de 5`);
        const listaCachipun = ["piedra", "papel", "tijera"]

        if (listaCachipun.indexOf(jugador) === -1 ) {
            alert(`${jugador} No es valido, por favor ingresa un valor valido`)
            return
        } 

        let consola = consolaJuego()

        if ( jugador === consola) {
            alert(`¡EMPATE!
                    Jugador: ${jugador}        Consola: ${consola}

                    Puntaje:
                    Jugador: ${puntosJugador}        Consola: ${puntosConsola}`);
            } else if (jugador === "tijera" && consola === "papel" ||
                        jugador === "papel" && consola === "piedra" || 
                        jugador === "piedra" && consola === "tijera"  ){
                puntosJugador +=1
                alert(`¡GANASTE!
                    Jugador: ${jugador}        Consola: ${consola}

                    Puntaje:
                    Jugador: ${puntosJugador}        Consola: ${puntosConsola}`);
            }else {
                puntosConsola +=1
                alert(`PERDISTE!
                    Jugador: ${jugador}
                    Consola: ${consola}

                    Puntaje:
                    Jugador: ${puntosJugador}
                    Consola: ${puntosConsola}`);
            }
            
        } 
        if (puntosConsola < puntosJugador) {
            alert(`Resultado final
                Jugador: ${puntosJugador}
                Consola: ${puntosConsola}

                ¡Ganaste!`)
        } else if (puntosConsola > puntosJugador){
            alert(`Resultado final
                    Jugador: ${puntosJugador}
                    Consola: ${puntosConsola}

                    ¡Perdiste!`)
        }else{
            alert(`EMPATE :O 
                Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`)
        }
    }

//Resultado de la consola cachipun
function consolaJuego(){
    const consolaelige = ["piedra", "papel", "tijera"]
    let resultadoConsola = Math.floor(Math.random() * 3);
    return consolaelige[resultadoConsola]
}


//Juego adivina el numero
//Faltan detalles aqui, la validación del número y que no siga sumando si no es valido
function adivinaElNumero() {
    let elNumero = 25;
    for (let index = 0; index < 5; index++) {
        let num = parseInt(prompt(`Intento ${index + 1} de 5
                                Adivina el número entre 1 y 50`));
        //El jugador elige entre el 1 al 50
        if(num === elNumero){
            alert(`Ganaste :0 ${elNumero} `)
            return
        }else if(num < elNumero){
            alert(`Uy ese no es, es mayor`)
        }else if (num > elNumero){
            alert(`Uy ese no es, es menor`)
        }
    }
}


//Juego aventura



function aventura() {
let puntosAventura = 0
    const finales = {
        bueno: "✨ Ves una luz, la salida. ¡Estás a salvo!",
        malo: "🌑 Avanzas y la luz desaparece... te pierdes en la oscuridad eterna.",
        oculto: "🛸 Sales a una granja de vacas, vibras y... ¡te secuestran los aliens!",
}

const movimientos ={
    izquierda(){
        puntosAventura ++ ;
        alert("Caminas hacia el este, el aire se siente más fresco.");
    },
    derecha(){
        puntosAventura --;
        alert("Te internas en un pasillo estrecho y húmedo...");
    },
    subir() {
        puntosAventura = 100;
        alert("Escalas por unas enredaderas que parecen brillar.");
    }
}

    let jugadorAventura = prompt(`Te encuentras en un sitio desconocido...

                                    ¿Qué haces?

                                    1. Ir a la izquierda
                                    2. Ir a la derecha`);
    
    if ( jugadorAventura === "1" ) {
        movimientos.izquierda()
    } else if ( jugadorAventura ==="2" ){
        movimientos.derecha()
    }else if (jugadorAventura === "3"){
        alert("¡Qué?")
        movimientos.subir()
    }else {
        alert("Te quedas paralizado por el miedo (Opción no válida).");
    }


    if (puntosAventura === 1) {
        alert(finales.bueno);
    } else if(puntosAventura === -1 ){
        alert(finales.malo);
    }else if (puntosAventura === 100 ){
        alert(finales.oculto);
    }
}


