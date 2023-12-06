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
        espacioLabelNivelOne('nivel1')
        espacioNivelOne()
        compararLabelOne()
        
    } else if (nivel === 'nivel2') {
        listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        listSolitoOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        espacioLabelNivelOne('nivel2')
        espacioNivelOne()
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
function espacioNivelOne() {
    
    if(listSolitoOne.length === 0) {
        
        revisarVictoriaLvlOne()
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
    var espacioNivelOne = document.getElementById('espacio-nivel-one-one')

    if (contenidoLabelEisght == uno.numero) {
        espacioNivelEigth.innerText = `${uno.nombre}`
    } else if (contenidoLabelEight == dos.numero) {
        espacioNivelEigth.innerText = `${dos.nombre}`
    } else if (contenidoLabelEight == tres.numero) {
        espacioNivelEigth.innerText = `${tres.nombre}`
    } else if (contenidoLabelEight == cuatro.numero) {
        espacioNivelEigth.innerText = `${cuatro.nombre}`
    } else if (contenidoLabelEight == cinco.numero) {
        espacioNivelEigth.innerText = `${cinco.nombre}`
    } else if (contenidoLabelEight == seis.numero) {
        espacioNivelEigth.innerText = `${seis.nombre}`
    } else if (contenidoLabelEight == siete.numero) {
        espacioNivelEigth.innerText = `${siete.nombre}`
    } else if (contenidoLabelEight == ocho.numero) {
        espacioNivelEigth.innerText = `${ocho.nombre}`
    } else if (contenidoLabelEight == nueve.numero) {
        espacioNivelEigth.innerText = `${nueve.nombre}`
    } else if (contenidoLabelEight == diez.numero) {
        espacioNivelEigth.innerText = `${diez.nombre}`
    } else if (contenidoLabelEight == once.numero) {
        espacioNivelEigth.innerText = `${once.nombre}`
    } else if (contenidoLabelEight == doce.numero) {
        espacioNivelEigth.innerText = `${doce.nombre}`
    } else if (contenidoLabelEight == trece.numero) {
        espacioNivelEigth.innerText = `${trece.nombre}`
    } else if (contenidoLabelEight == catorce.numero) {
        espacioNivelEigth.innerText = `${catorce.nombre}`
    } else if (contenidoLabelEight == quince.numero) {
        espacioNivelEigth.innerText = `${quince.nombre}`
    } else if (contenidoLabelEight == diezYSeis.numero) {
        espacioNivelEigth.innerText = `${diezYSeis.nombre}`
    } else if (contenidoLabelEight == diezYSiete.numero) {
        espacioNivelEigth.innerText = `${diezYSiete.nombre}`
    } else if (contenidoLabelEight == diezYOcho.numero) {
        espacioNivelEigth.innerText = `${diezYOcho.nombre}`
    } else if (contenidoLabelEight == diezYNueve.numero) {
        espacioNivelEigth.innerText = `${diezYNueve.nombre}`
    } else if (contenidoLabelEight == veinte.numero) {
        espacioNivelEigth.innerText = `${veinte.nombre}`
    } else if (contenidoLabelEight == veinteYUno.numero) {
        espacioNivelEigth.innerText = `${veinteYUno.nombre}`
    } else if (contenidoLabelEight == veinteYDos.numero) {
        espacioNivelEigth.innerText = `${veinteYDos.nombre}`
    } else if (contenidoLabelEight == veinteYTres.numero) {
        espacioNivelEigth.innerText = `${veinteYTres.nombre}`
    } else if (contenidoLabelEight == veinteYCuatro.numero) {
        espacioNivelEigth.innerText = `${veinteYCuatro.nombre}`
    } else if (contenidoLabelEight == veinteYCinco.numero) {
        espacioNivelEigth.innerText = `${veinteYCinco.nombre}`
    } else if (contenidoLabelEight == veinteYSeis.numero) {
        espacioNivelEigth.innerText = `${veinteYSeis.nombre}`
    } else if (contenidoLabelEight == veinteYSiete.numero) {
        espacioNivelEigth.innerText = `${veinteYSiete.nombre}`
    } else if (contenidoLabelEight == veinteYOcho.numero) {
        espacioNivelEigth.innerText = `${veinteYOcho.nombre}`
    } else if (contenidoLabelEight == veinteYNueve.numero) {
        espacioNivelEigth.innerText = `${veinteYNueve.nombre}`
    } else if (contenidoLabelEight == treinta.numero) {
        espacioNivelEigth.innerText = `${treinta.nombre}`
    } else if (contenidoLabelEight == treintaYUno.numero) {
        espacioNivelEigth.innerText = `${treintaYUno.nombre}`
    } else if (contenidoLabelEight == treintaYDos.numero) {
        espacioNivelEigth.innerText = `${treintaYDos.nombre}`
    } else if (contenidoLabelEight == treintaYTres.numero) {
        espacioNivelEigth.innerText = `${treintaYTres.nombre}`
    } else if (contenidoLabelEight == treintaYCuatro.numero) {
        espacioNivelEigth.innerText = `${treintaYCuatro.nombre}`
    } else if (contenidoLabelEight == treintaYCinco.numero) {
        espacioNivelEigth.innerText = `${treintaYCinco.nombre}`
    } else if (contenidoLabelEight == treintaYSeis.numero) {
        espacioNivelEigth.innerText = `${treintaYSeis.nombre}`
    } else if (contenidoLabelEight == treintaYSiete.numero) {
        espacioNivelEigth.innerText = `${treintaYSiete.nombre}`
    } else if (contenidoLabelEight == treintaYOcho.numero) {
        espacioNivelEigth.innerText = `${treintaYOcho.nombre}`
    } else if (contenidoLabelEight == treintaYNueve.numero) {
        espacioNivelEigth.innerText = `${treintaYNueve.nombre}`
    } else if (contenidoLabelEight == cuarenta.numero) {
        espacioNivelEigth.innerText = `${cuarenta.nombre}`
    } else {
        return
    }
}

// agregar resto de labels para comparar en todos los niveles
function verificarAciertosLvlOne() {
   
    var contenidoLabel = document.getElementById('espacio-label-nivel-one-a').innerText
    var contenidoLabe2 = document.getElementById('espacio-label-nivel-one-b').innerText
    var contenidoLabe3 = document.getElementById('espacio-label-nivel-one-c').innerText
    var contenidoLabe4 = document.getElementById('espacio-label-nivel-one-d').innerText
    var contenidoLabe5 = document.getElementById('espacio-label-nivel-one-e').innerText
    var contenidoLabePrincipal = document.getElementById('espacio-nivel-one').innerText

    if (inputSexoAleatorioone.checked) {
        if(contenidoLabel == contenidoLabePrincipal) {
            crearMensaje("CORRECTO")
            aciertosJugador++
            spanAciertosJugador.innerHTML = aciertosJugador
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        } else {
            crearMensaje("INCORRECTO")
            aciertosEnemigo++
            spanAciertosEnemigo.innerHTML = aciertosEnemigo
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        }
    } else if (inputSexoAleatoriotwo.checked) {
        if (contenidoLabe2 == contenidoLabePrincipal) {
            crearMensaje("CORRECTO")
            aciertosJugador++
            spanAciertosJugador.innerHTML = aciertosJugador
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        } else {
            crearMensaje("INCORRECTO")
            aciertosEnemigo++
            spanAciertosEnemigo.innerHTML = aciertosEnemigo
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        }
    } else if (inputSexoAleatoriothree.checked) {
        if (contenidoLabe3 == contenidoLabePrincipal) {
            crearMensaje("CORRECTO")
            aciertosJugador++
            spanAciertosJugador.innerHTML = aciertosJugador
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        } else {
            crearMensaje("INCORRECTO")
            aciertosEnemigo++
            spanAciertosEnemigo.innerHTML = aciertosEnemigo
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        }
    } else if (inputSexoAleatoriofour.checked) {
        if (contenidoLabe4 == contenidoLabePrincipal) {
            crearMensaje("CORRECTO")
            aciertosJugador++
            spanAciertosJugador.innerHTML = aciertosJugador
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        } else {
            crearMensaje("INCORRECTO")
            aciertosEnemigo++
            spanAciertosEnemigo.innerHTML = aciertosEnemigo
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        }
    } else if (inputSexoAleatoriofive.checked) {
        if (contenidoLabe5 == contenidoLabePrincipal) {
            crearMensaje("CORRECTO")
            aciertosJugador++
            spanAciertosJugador.innerHTML = aciertosJugador
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        } else {
            crearMensaje("INCORRECTO")
            aciertosEnemigo++
            spanAciertosEnemigo.innerHTML = aciertosEnemigo
            espacioLabelNivelOne()
            espacioNivelOne()
            compararLabelOne()
        }
    } else {
        alert('Selecciona un juego')
        location.reaload()
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
function revisarVictoriaLvlOne() {
    if (aciertosJugador == 5) {
        crearMensajeFinal("¡¡FELICIDADES!!")
    } else {
        crearMensajeFinal('¡¡INTENTALO DE NUEVO!!')
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