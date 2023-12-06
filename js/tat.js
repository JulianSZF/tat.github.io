const sectionBienvenidos= document.getElementById('bienvenidos')
const sectionFuncionalidad= document.getElementById('funcionalidad')
const inputGameMateOne= document.getElementById('c-e-e-n')
const inputGameLengOne= document.getElementById('c-e-l-l')
const inputGameEmoOne= document.getElementById('e-l-p')
const inputNsmoOne= document.getElementById('dtokio-n-s-m-o-1')
const inputNsmoTwo= document.getElementById('dtokio-n-s-m-o-2')
const inputNsmoThree= document.getElementById('dtokio-n-s-m-o-3')
const inputNsmoFour= document.getElementById('dtokio-n-s-m-o-4')
const inputNsmoFive= document.getElementById('dtokio-n-s-m-o-5')
const inputNsmoSixe= document.getElementById('dtokio-n-s-m-o-6')
const inputNsmoSeven= document.getElementById('dtokio-n-s-m-o-7')
const inputNsmoEight= document.getElementById('dtokio-n-s-m-o-8')
const sectionBotonesLevels= document.getElementById('botones-levels')
const sectionReiniciar= document.getElementById('reiniciar')
const sectionMensajes= document.getElementById('resultado')
const spanAciertosJugador= document.getElementById('aciertos-jugador')
const spanAciertosEnemigo= document.getElementById('aciertos-enemigo')
const inputSexoAleatorioone= document.getElementById('sexo-aleatorio-one')
const inputSexoAleatoriotwo= document.getElementById('sexo-aleatorio-two')
const inputSexoAleatoriothree= document.getElementById('sexo-aleatorio-three')
const inputSexoAleatoriofour= document.getElementById('sexo-aleatorio-four')
const inputSexoAleatoriofive= document.getElementById('sexo-aleatorio-five')
const inputSexoAleatoriosix= document.getElementById('sexo-aleatorio-six')
const inputSexoAleatorioseven= document.getElementById('sexo-aleatorio-seven')
const inputSexoAleatorioeight= document.getElementById('sexo-aleatorio-eight')
const inputSexoAleatorionine= document.getElementById('sexo-aleatorio-nine')
const inputSexoAleatorioten= document.getElementById('sexo-aleatorio-ten')
let listSolitoOne
let listOne
let indexAciertoJugador
let indexAciertoEnemigo
let aciertosJugador = 0
let aciertosEnemigo = 0

class Numeros {
    constructor(numero, nombre) {
        this.numero = numero
        this.nombre = nombre
    }
}

let uno = new Numeros ('1', 'UNO')
let dos = new Numeros ('2', 'DOS')
let tres = new Numeros ('3', 'TRES')
let cuatro = new Numeros ('4', 'CUATRO')
let cinco = new Numeros ('5', 'CINCO')
let seis = new Numeros ('6', 'SEIS')
let siete = new Numeros ('7', 'SIETE')
let ocho = new Numeros ('8', 'OCHO')
let nueve = new Numeros ('9', 'NUEVE')
let diez = new Numeros ('10', 'DIEZ')
let once = new Numeros ('11', 'ONCE')
let doce = new Numeros ('12', 'DOCE')
let trece = new Numeros ('13', 'TRECE')
let catorce = new Numeros ('14', 'CATORCE')
let quince = new Numeros ('15', 'QUINCE')
let diezYSeis = new Numeros ('16', 'DIEZ Y SEIS')
let diezYSiete = new Numeros ('17', 'DIEZ Y SIETE')
let diezYOcho = new Numeros ('18', 'DIEZ Y OCHO')
let diezYNueve = new Numeros ('19', 'DIEZ Y NUEVE')
let veinte = new Numeros ('20', 'VEINTE')
let veinteYUno = new Numeros ('21', 'VEINTE Y UNO')
let veinteYDos = new Numeros ('22', 'VEINTE Y DOS')
let veinteYTres = new Numeros ('23', 'VEINTE Y TRES')
let veinteYCuatro = new Numeros ('24', 'VEINTE Y CUATRO')
let veinteYCinco = new Numeros ('25', 'VEINTE Y CINCO')
let veinteYSeis = new Numeros ('26', 'VEINTE Y SEIS')
let veinteYSiete = new Numeros ('27', 'VEINTE Y SIETE')
let veinteYOcho = new Numeros ('28', 'VEINTE Y OCHO')
let veinteYNueve = new Numeros ('29', 'VEINTE Y NUEVE')
let treinta = new Numeros ('30', 'TREINTA')
let treintaYUno = new Numeros ('31', 'TREINTA Y UNO')
let treintaYDos = new Numeros ('32', 'TREINTA Y DOS')
let treintaYTres = new Numeros ('33', 'TREINTA Y TRES')
let treintaYCuatro = new Numeros ('34', 'TREINTA Y CUATRO')
let treintaYCinco = new Numeros ('35', 'TREINTA Y CINCO')
let treintaYSeis = new Numeros ('36', 'TREINTA Y SEIS')
let treintaYSiete = new Numeros ('37', 'TREINTA Y SIETE')
let treintaYOcho = new Numeros ('38', 'TREINTA Y OCHO')
let treintaYNueve = new Numeros ('39', 'TREINTA Y NUEVE')
let cuarenta = new Numeros ('40', 'CUARENTA')

function verificarSection() {
    if (sectionReiniciar) {
        ocultarSeccion(sectionReiniciar)
    }
    if (sectionFuncionalidad) {
        ocultarSeccion(sectionFuncionalidad)
    }
    if (sectionBotonesLevels) {
        ocultarSeccion(sectionBotonesLevels)
    }
}

function ocultarSeccion(seccion) {
    seccion.style.display = 'none'
}

function cambioPagina(destino) {
    window.location.href = `${destino}.html`
}

function verificarTexto() {
    var textoInput = document.getElementById('nombre').value;

        if (textoInput.length >= 4) {
                sectionBienvenidos.style.display = 'none'
                
            } else {
                alert("Ingresa al menos 4 caracteres antes de pasar a la siguiente sección.");
                location.reload()
        }
    sectionFuncionalidad.style.display = 'flex'
    
}

function verificarJuegoEscogido() {
   
    if (inputGameMateOne.checked) {
            window.location.href = `tatMatematicas.html`

        } else if (inputGameLengOne.checked) {
            window.location.href = 'tatLenguaje.html'

        } else if (inputGameEmoOne.checked) {
            window.location.href = 'tatEmociones.html'

        } else {
            alert('Selecciona un juego')
            
    }
}

function verificarNivelEscogidoMate() {
    
    if (inputNsmoOne.checked) {
        window.location.href = 'tatMateLvl1.html'
        
    } else if (inputNsmoTwo.checked) {
        window.location.href = 'tatMateLvl2.html'
    } else if (inputNsmoThree.checked) {
        window.location.href = 'tatMateLvl3.html'
    } else if (inputNsmoFour.checked) {
        window.location.href = 'tatMateLvl4.html'
    } else if (inputNsmoFive.checked) {
        window.location.href = 'tatMateLvl5.html'
    } else if (inputNsmoSixe.checked) {
        window.location.href = 'tatMateLvl6.html'
    } else if (inputNsmoSeven.checked) {
        window.location.href = 'tatMateLvl7.html'
    } else if (inputNsmoEight.checked) {
        window.location.href = 'tatMateLvl8.html'
    } else {
        alert('Selecciona un juego')
        
    }
    
}

// comprobar si usando solo la variable nivel funciona
function listOneMate(nivel) {

    if (nivel === 'nivel1') {
        listOne = [1, 2, 3, 4, 5]
        listSolitoOne = [1, 2, 3, 4, 5]
        espacioLabelNivelOne(nivel)
        espacioNivelOne(nivel)
        compararLabelOne()
        
    } else if (nivel === 'nivel2') {
        listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        listSolitoOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        espacioLabelNivelOne(nivel)
        espacioNivelOne(nivel)
        compararLabelOne()
        
    }
}

function siguienteNivel(nivel) {

    if (nivel === 'nivel1') {
        window.location.href = 'tatMateLvl2.html'
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatMateLvl3.html'
    } else {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel despues a este')
    }
}

function anteriorNivel(nivel) {

    if (nivel === 'nivel1') {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel anterior a este')
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatMateLvl1.html'
    } else {
        alert('No funciono esto del anterior')
    }
}

function espacioLabelNivelOne(nivel) {
    
    listOne.sort(function() {return 0.5 - Math.random()})

    if (nivel === 'nivel1') {
        document.getElementById('espacio-label-nivel-one-a').innerText = listOne[0]
        document.getElementById('espacio-label-nivel-one-b').innerText = listOne[1]
        document.getElementById('espacio-label-nivel-one-c').innerText = listOne[2]
        document.getElementById('espacio-label-nivel-one-d').innerText = listOne[3]
        document.getElementById('espacio-label-nivel-one-e').innerText = listOne[4]
    } else if (nivel === 'nivel2') {
        document.getElementById('espacio-label-nivel-one-a').innerText = listOne[0]
        document.getElementById('espacio-label-nivel-one-b').innerText = listOne[1]
        document.getElementById('espacio-label-nivel-one-c').innerText = listOne[2]
        document.getElementById('espacio-label-nivel-one-d').innerText = listOne[3]
        document.getElementById('espacio-label-nivel-one-e').innerText = listOne[4]
        document.getElementById('espacio-label-nivel-one-f').innerText = listOne[5]
        document.getElementById('espacio-label-nivel-one-g').innerText = listOne[6]
        document.getElementById('espacio-label-nivel-one-h').innerText = listOne[7]
        document.getElementById('espacio-label-nivel-one-i').innerText = listOne[8]
        document.getElementById('espacio-label-nivel-one-j').innerText = listOne[9]
        
    }
}

// verificar esta funcion para q se pueda utilizar en todos los niveles
function espacioNivelOne(nivel) {
        if(listSolitoOne.length === 0) {

            revisarVictoriaLvlOne(nivel)
            return
        } else {
            var indiceAleatorio = Math.floor(Math.random() * listSolitoOne.length)
            var numeroSeleccionado = listSolitoOne.splice(indiceAleatorio, 1)[0]

            document.getElementById('espacio-nivel-one').innerText = numeroSeleccionado
        }

}

// cambiar variables terminadas en Eight por One para q funcione
function compararLabelOne() {
    var contenidoLabelOne = document.getElementById('espacio-nivel-one').innerText
    var espacioNivelOneOne = document.getElementById('espacio-nivel-one-one')

    if (contenidoLabelOne == uno.numero) {
        espacioNivelOneOne.innerText = `${uno.nombre}`
    } else if (contenidoLabelOne == dos.numero) {
        espacioNivelOneOne.innerText = `${dos.nombre}`
    } else if (contenidoLabelOne == tres.numero) {
        espacioNivelOneOne.innerText = `${tres.nombre}`
    } else if (contenidoLabelOne == cuatro.numero) {
        espacioNivelOneOne.innerText = `${cuatro.nombre}`
    } else if (contenidoLabelOne == cinco.numero) {
        espacioNivelOneOne.innerText = `${cinco.nombre}`
    } else if (contenidoLabelOne == seis.numero) {
        espacioNivelOneOne.innerText = `${seis.nombre}`
    } else if (contenidoLabelOne == siete.numero) {
        espacioNivelOneOne.innerText = `${siete.nombre}`
    } else if (contenidoLabelOne == ocho.numero) {
        espacioNivelOneOne.innerText = `${ocho.nombre}`
    } else if (contenidoLabelOne == nueve.numero) {
        espacioNivelOneOne.innerText = `${nueve.nombre}`
    } else if (contenidoLabelOne == diez.numero) {
        espacioNivelOneOne.innerText = `${diez.nombre}`
    } else if (contenidoLabelOne == once.numero) {
        espacioNivelOneOne.innerText = `${once.nombre}`
    } else if (contenidoLabelOne == doce.numero) {
        espacioNivelOneOne.innerText = `${doce.nombre}`
    } else if (contenidoLabelOne == trece.numero) {
        espacioNivelOneOne.innerText = `${trece.nombre}`
    } else if (contenidoLabelOne == catorce.numero) {
        espacioNivelOneOne.innerText = `${catorce.nombre}`
    } else if (contenidoLabelOne == quince.numero) {
        espacioNivelOneOne.innerText = `${quince.nombre}`
    } else if (contenidoLabelOne == diezYSeis.numero) {
        espacioNivelOneOne.innerText = `${diezYSeis.nombre}`
    } else if (contenidoLabelOne == diezYSiete.numero) {
        espacioNivelOneOne.innerText = `${diezYSiete.nombre}`
    } else if (contenidoLabelOne == diezYOcho.numero) {
        espacioNivelOneOne.innerText = `${diezYOcho.nombre}`
    } else if (contenidoLabelOne == diezYNueve.numero) {
        espacioNivelOneOne.innerText = `${diezYNueve.nombre}`
    } else if (contenidoLabelOne == veinte.numero) {
        espacioNivelOneOne.innerText = `${veinte.nombre}`
    } else if (contenidoLabelOne == veinteYUno.numero) {
        espacioNivelOneOne.innerText = `${veinteYUno.nombre}`
    } else if (contenidoLabelOne == veinteYDos.numero) {
        espacioNivelOneOne.innerText = `${veinteYDos.nombre}`
    } else if (contenidoLabelOne == veinteYTres.numero) {
        espacioNivelOneOne.innerText = `${veinteYTres.nombre}`
    } else if (contenidoLabelOne == veinteYCuatro.numero) {
        espacioNivelOneOne.innerText = `${veinteYCuatro.nombre}`
    } else if (contenidoLabelOne == veinteYCinco.numero) {
        espacioNivelOneOne.innerText = `${veinteYCinco.nombre}`
    } else if (contenidoLabelOne == veinteYSeis.numero) {
        espacioNivelOneOne.innerText = `${veinteYSeis.nombre}`
    } else if (contenidoLabelOne == veinteYSiete.numero) {
        espacioNivelOneOne.innerText = `${veinteYSiete.nombre}`
    } else if (contenidoLabelOne == veinteYOcho.numero) {
        espacioNivelOneOne.innerText = `${veinteYOcho.nombre}`
    } else if (contenidoLabelOne == veinteYNueve.numero) {
        espacioNivelOneOne.innerText = `${veinteYNueve.nombre}`
    } else if (contenidoLabelOne == treinta.numero) {
        espacioNivelOneOne.innerText = `${treinta.nombre}`
    } else if (contenidoLabelOne == treintaYUno.numero) {
        espacioNivelOneOne.innerText = `${treintaYUno.nombre}`
    } else if (contenidoLabelOne == treintaYDos.numero) {
        espacioNivelOneOne.innerText = `${treintaYDos.nombre}`
    } else if (contenidoLabelOne == treintaYTres.numero) {
        espacioNivelOneOne.innerText = `${treintaYTres.nombre}`
    } else if (contenidoLabelOne == treintaYCuatro.numero) {
        espacioNivelOneOne.innerText = `${treintaYCuatro.nombre}`
    } else if (contenidoLabelOne == treintaYCinco.numero) {
        espacioNivelOneOne.innerText = `${treintaYCinco.nombre}`
    } else if (contenidoLabelOne == treintaYSeis.numero) {
        espacioNivelOneOne.innerText = `${treintaYSeis.nombre}`
    } else if (contenidoLabelOne == treintaYSiete.numero) {
        espacioNivelOneOne.innerText = `${treintaYSiete.nombre}`
    } else if (contenidoLabelOne == treintaYOcho.numero) {
        espacioNivelOneOne.innerText = `${treintaYOcho.nombre}`
    } else if (contenidoLabelOne == treintaYNueve.numero) {
        espacioNivelOneOne.innerText = `${treintaYNueve.nombre}`
    } else if (contenidoLabelOne == cuarenta.numero) {
        espacioNivelOneOne.innerText = `${cuarenta.nombre}`
    } else {
        return
    }
}

// agregar resto de labels para comparar en todos los niveles
function verificarAciertosLvlOne(nivel) {
   
    var contenidoLabel = document.getElementById('espacio-label-nivel-one-a').innerText
    var contenidoLabe2 = document.getElementById('espacio-label-nivel-one-b').innerText
    var contenidoLabe3 = document.getElementById('espacio-label-nivel-one-c').innerText
    var contenidoLabe4 = document.getElementById('espacio-label-nivel-one-d').innerText
    var contenidoLabe5 = document.getElementById('espacio-label-nivel-one-e').innerText
    var contenidoLabe6 = document.getElementById('espacio-label-nivel-one-f').innerText
    var contenidoLabe7 = document.getElementById('espacio-label-nivel-one-g').innerText
    var contenidoLabe8 = document.getElementById('espacio-label-nivel-one-h').innerText
    var contenidoLabe9 = document.getElementById('espacio-label-nivel-one-i').innerText
    var contenidoLabe10 = document.getElementById('espacio-label-nivel-one-j').innerText
    var contenidoLabePrincipal = document.getElementById('espacio-nivel-one').innerText

    if (nivel === 'nivel1') {
        if (inputSexoAleatorioone.checked) {
            if(contenidoLabel == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriotwo.checked) {
            if (contenidoLabe2 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriothree.checked) {
            if (contenidoLabe3 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriofour.checked) {
            if (contenidoLabe4 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriofive.checked) {
            if (contenidoLabe5 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else {
            alert('Selecciona un juego')
        }
    } else if (nivel === 'nivel2')
        if (inputSexoAleatorioone.checked) {
            if(contenidoLabel == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriotwo.checked) {
            if (contenidoLabe2 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriothree.checked) {
            if (contenidoLabe3 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriofour.checked) {
            if (contenidoLabe4 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriofive.checked) {
            if (contenidoLabe5 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatoriosix.checked) {
            if (contenidoLabe6 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()

            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()

            }
        } else if (inputSexoAleatorioseven.checked) {
            if (contenidoLabe7 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatorioeight.checked) {
            if (contenidoLabe8 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatorionine.checked) {
            if (contenidoLabe9 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else if (inputSexoAleatorioten.checked) {
            if (contenidoLabe10 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOne(nivel)
                espacioNivelOne(nivel)
                compararLabelOne()
            }
        } else {
            alert('Selecciona un juego')
        }
    
}

function crearMensaje(resultado) {
    let nuevoAciertoDelJugador = document.createElement('p')
    let nuevoAciertoDelEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAciertoDelJugador.innerHTML = indexAciertoJugador
    nuevoAciertoDelEnemigo.innerHTML = indexAciertoEnemigo
}

// poner variable nivel para diversos eventos en cada nivel
function revisarVictoriaLvlOne(nivel) {
    if (nivel === 'nivel1') {
        if (aciertosJugador == 5) {
            crearMensajeFinal("¡¡FELICIDADES!!")
        } else {
            crearMensajeFinal('¡¡INTENTALO DE NUEVO!!')
        }
    } else if (nivel === 'nivel2') {
        if (aciertosJugador >= 7) {
            crearMensajeFinal("¡¡FELICIDADES!!")
        } else {
            crearMensajeFinal('¡¡INTENTALO DE NUEVO!!')
        }
    }
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    if (resultadoFinal == "¡¡FELICIDADES!!") {
        sectionBotonesLevels.style.display = 'flex'
        document.getElementById('boton-1').disabled = true
    } else {
        sectionReiniciar.style.display = 'block'
        document.getElementById('boton-1').disabled = true
    }
    
}

function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', verificarSection())