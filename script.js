//Inicia 
let juegos = parseInt(prompt("Juguemos, pon 1 si quieres jugar cachipun!"));

if (isNaN(juegos) || juegos <= 0 || juegos > 3 )  {
    alert("Valor invalido");
}else {
    alert("Jugaremos 5 rondas!");
    cachipun();
}

function cachipun() {
    
    let puntosJugador = 0
    let puntosConsola = 0

    for (let index = 0; index < 5; index++) {
        let jugador = prompt("piedra, papel o tijera");
    const listaCachipun = ["piedra", "papel", "tijera"]
        if (listaCachipun.indexOf(jugador) === -1 ) {
            alert(`No es valido ${jugador} `)
        } else {
            alert("si es valido!") 
        }


        let consola = consolaJuego()
        if ( jugador === consola) {
            alert(`jugador: ${jugador} consola: ${consola} Empate! 
                    Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}
                `)
            } else if (jugador === "tijera" && consola === "papel" ||
                        jugador === "papel" && consola === "piedra" || 
                        jugador === "piedra" && consola === "tijera"  ){
                puntosJugador +=1
                alert(`jugador: ${jugador} consola: ${consola}  GANASTE! 
                    Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`
                    )
                
            }else {
                puntosConsola +=1
                alert(`jugador: ${jugador} consola: ${consola} PERDISTE! 
                    Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`
                )
            }
            
        } 
        if (puntosConsola < puntosJugador) {
            alert(`¡Ganaste! Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`)
        } else if (puntosConsola > puntosJugador){
            alert(`¡Perdiste! Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`)
        }else{
            alert(`EMPATE :O Puntos jugador:${puntosJugador} Puntos consola: ${puntosConsola}`)
        }
    }

//Resultado de la consola cachipun
function consolaJuego(){
    const consolaelige = ["piedra", "papel", "tijera"]
    let resultadoConsola = Math.floor(Math.random() * 2);
    return consolaelige[resultadoConsola]
    console.log(consolaelige[resultadoConsola])
}


