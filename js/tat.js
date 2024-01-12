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
const inputSexoAleatorioeleven= document.getElementById('sexo-aleatorio-eleven')
const inputSexoAleatoriotwelve= document.getElementById('sexo-aleatorio-twelve')
const inputSexoAleatoriothirteen= document.getElementById('sexo-aleatorio-thirteen')
const inputSexoAleatoriofourteen= document.getElementById('sexo-aleatorio-fourteen')
const inputSexoAleatoriofifteen= document.getElementById('sexo-aleatorio-fifteen')



const memoryGame = document.getElementById('memory-game')
let cards
let images
let flippedCards = []
let matchedCards = []
let listSolitoOne
let listOne
let listSolitoTwo
let listTwo
let listEmociones
let numeroSeleccionado
let indiceAleatorio
let indexAciertoJugador
let indexAciertoEnemigo
let aciertosJugador = 0
let aciertosEnemigo = 0
let tiempoTranscurrido = 0
let temporizador

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
let diezYSeis = new Numeros ('16', 'DIECISÉIS')
let diezYSiete = new Numeros ('17', 'DIECISIETE')
let diezYOcho = new Numeros ('18', 'DIECIOCHO')
let diezYNueve = new Numeros ('19', 'DIECINUEVE')
let veinte = new Numeros ('20', 'VEINTE')
let veinteYUno = new Numeros ('21', 'VEINTIUNO')
let veinteYDos = new Numeros ('22', 'VEINTIDOS')
let veinteYTres = new Numeros ('23', 'VEINTITRES')
let veinteYCuatro = new Numeros ('24', 'VEINTICUATRO')
let veinteYCinco = new Numeros ('25', 'VEINTICINCO')
let veinteYSeis = new Numeros ('26', 'VEINTISEIS')
let veinteYSiete = new Numeros ('27', 'VEINTISIETE')
let veinteYOcho = new Numeros ('28', 'VEINTIOCHO')
let veinteYNueve = new Numeros ('29', 'VEINTINUEVE')
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

function verificarNivelEscogidoLeng() {
    
    if (inputNsmoOne.checked) {
        window.location.href = 'tatLegLvl1.html'
    } else if (inputNsmoTwo.checked) {
        window.location.href = 'tatLegLvl2.html'
    } else if (inputNsmoThree.checked) {
        window.location.href = 'tatLegLvl3.html'
    } else if (inputNsmoFour.checked) {
        window.location.href = 'tatLegLvl4.html'
    } else if (inputNsmoFive.checked) {
        window.location.href = 'tatLegLvl5.html'
    } else if (inputNsmoSixe.checked) {
        window.location.href = 'tatLegLvl6.html'
    } else if (inputNsmoSeven.checked) {
        window.location.href = 'tatLegLvl7.html'
    } else if (inputNsmoEight.checked) {
        window.location.href = 'tatLegLvl8.html'
    } else {
        alert('Selecciona un juego')
        
    }
    
}

function verificarNivelEscogidoEmo() {
    
    if (inputNsmoOne.checked) {
        window.location.href = 'tatEmoLvl1.html'
    } else if (inputNsmoTwo.checked) {
        window.location.href = 'tatEmoLvl2.html'
    } else if (inputNsmoThree.checked) {
        window.location.href = 'tatEmoLvl3.html'
    } else if (inputNsmoFour.checked) {
        window.location.href = 'tatEmoLvl4.html'
    } else if (inputNsmoFive.checked) {
        window.location.href = 'tatEmoLvl5.html'
    } else if (inputNsmoSixe.checked) {
        window.location.href = 'tatEmoLvl6.html'
    } else if (inputNsmoSeven.checked) {
        window.location.href = 'tatEmoLvl7.html'
    } else {
        alert('Selecciona un juego')
        
    }
    
}

function mostrarMenu() {
    var menu = document.getElementById('menu')
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'
}

function formatearTiempo(segundos) {
    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segundosRestantes = segundos % 60

    const formatoHora = pad(horas) + ':' + pad(minutos) + ':' + (segundosRestantes)
    return formatoHora
}

function pad(valor) {
    return valor < 10 ? '0' + valor : valor
}

function actualizarTiempoTranscurrido() {
    document.getElementById('tiempo').innerText = formatearTiempo(tiempoTranscurrido)
    tiempoTranscurrido++
}

function iniciarTemporizador() {
    temporizador = setInterval(actualizarTiempoTranscurrido, 1000)
}

function listOneMate(nivel) {

    if (nivel === 'nivel1') {
        listOne = [1, 2, 3, 4, 5]
        listSolitoOne = [1, 2, 3, 4, 5]
        espacioLabelNivelOne(nivel)
        espacioNivelOne(nivel)
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel2') {
        listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        listSolitoOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        espacioLabelNivelOne(nivel)
        espacioNivelOne(nivel)
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel3') {
        listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        listSolitoOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        espacioLabelNivelOne(nivel)
        espacioNivelOne(nivel)
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel4') {
        listOne = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        listSolitoOne = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        espacioLabelNivelOne('nivel3')
        espacioNivelOne('nivel3')
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel5') {
        listOne = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        listSolitoOne = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        espacioLabelNivelOne('nivel3')
        espacioNivelOne('nivel3')
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel6') {
        listOne = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        listSolitoOne = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
        espacioLabelNivelOne('nivel3')
        espacioNivelOne('nivel3')
        compararLabelOne()
        iniciarTemporizador()
        
    } else if (nivel === 'nivel7') {
        listOne = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
        listSolitoOne = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
        espacioLabelNivelOne('nivel3')
        espacioNivelOne('nivel3')
        compararLabelOne()
        iniciarTemporizador()
        
    } else {
        listOne = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        listSolitoOne = [26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
        espacioLabelNivelOne('nivel3')
        espacioNivelOne('nivel3')
        compararLabelOne()
        iniciarTemporizador()
        
    }
}

function listOneLeng(nivel) {

    if (nivel === 'nivel1') {
        listTwo = ['a', 'b', 'c', 'd', 'e']
        listSolitoTwo = ['a', 'b', 'c', 'd', 'e']
        espacioLabelNivelOneLeng(nivel)
        espacioNivelOneLeng(nivel)
        iniciarTemporizador()
                
    } else if (nivel === 'nivel2') {
        listTwo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ch', 'i']
        listSolitoTwo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ch', 'i']
        espacioLabelNivelOneLeng(nivel)
        espacioNivelOneLeng(nivel)
        iniciarTemporizador()
                
    } else if (nivel === 'nivel3') {
        listTwo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ch', 'i', 'j', 'k', 'l', 'll', 'm']
        listSolitoTwo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'ch', 'i', 'j', 'k', 'l', 'll', 'm']
        espacioLabelNivelOneLeng(nivel)
        espacioNivelOneLeng(nivel)
        iniciarTemporizador()
                
    } else if (nivel === 'nivel4') {
        listTwo = ['f', 'g', 'h', 'ch', 'i', 'j', 'k', 'l', 'll', 'm', 'n', 'ñ', 'o', 'p', 'q']
        listSolitoTwo = ['f', 'g', 'h', 'ch', 'i', 'j', 'k', 'l', 'll', 'm', 'n', 'ñ', 'o', 'p', 'q']
        espacioLabelNivelOneLeng('nivel3')
        espacioNivelOneLeng('nivel3')
        iniciarTemporizador()
                
    } else if (nivel === 'nivel5') {
        listTwo = ['j', 'k', 'l', 'll', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 'rr', 's', 't', 'u']
        listSolitoTwo = ['j', 'k', 'l', 'll', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 'rr', 's', 't', 'u']
        espacioLabelNivelOneLeng('nivel3')
        espacioNivelOneLeng('nivel3')
        iniciarTemporizador()
                
    } else {
        listTwo = ['n', 'ñ', 'o', 'p', 'q', 'r', 'rr', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        listSolitoTwo = ['n', 'ñ', 'o', 'p', 'q', 'r', 'rr', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        espacioLabelNivelOneLeng('nivel3')
        espacioNivelOneLeng('nivel3')
        iniciarTemporizador()
                
    }
}

function listEmo(nivel) {
    if (nivel === 'nivel1') {
        
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else if (nivel === 'nivel2') {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else if (nivel === 'nivel3') {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png', 'Intento Final-04.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else if (nivel === 'nivel4') {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png', 'Intento Final-04.png', 'Intento Final-05.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else if (nivel === 'nivel5') {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png', 'Intento Final-04.png', 'Intento Final-05.png', 'Intento Final-06.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else if (nivel === 'nivel6') {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png', 'Intento Final-04.png', 'Intento Final-05.png', 'Intento Final-06.png', 'Intento Final-07.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    } else {
        images = ['intento 1_Mesa de trabajo 1.png', 'Intento Final_Mesa de trabajo 1.png', 'Intento Final-02.png', 'Intento Final-03.png', 'Intento Final-04.png', 'Intento Final-05.png', 'Intento Final-06.png', 'Intento Final-07.png', 'Intento Final-08.png']
        cards = images.concat(images)
        shuffle(cards)
        renderCards()
        iniciarTemporizador()
    }
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}

function renderCards() {
    memoryGame.innerHTML = ''
    cards.forEach((imageName, index) => {
      const card = document.createElement('div')
      card.classList.add('card')
      card.dataset.imageName = imageName
      card.dataset.index = index

      const img = document.createElement('img')
      img.src = './assets/' + imageName
      img.alt = 'Card Image'
      img.classList.add('hidden')

      const contentContainer = document.createElement('div')
      contentContainer.classList.add('content-container')

      const questionMark = document.createElement('div')
      questionMark.textContent = '?'
      questionMark.classList.add('question-mark')

      contentContainer.appendChild(img)
      contentContainer.appendChild(questionMark)

      card.appendChild(contentContainer)

      card.addEventListener('click', flipCard)
      memoryGame.appendChild(card)
    })
}

function flipCard() {
    const card = this

    if (!card.classList.contains('flipped') && flippedCards.length < 2) {
        card.classList.add('flipped')
        flippedCards.push(card)

      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000)
      }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards

    if (card1.dataset.imageName === card2.dataset.imageName) {
      // Coincidencia
      matchedCards.push(card1, card2)
      crearMensaje("CORRECTO")
      aciertosJugador++
      spanAciertosJugador.innerHTML = aciertosJugador
      
      if (matchedCards.length === cards.length) {
        clearInterval(temporizador)
        guardarDatos()
        crearMensajeFinal("¡¡FELICIDADES!!")
        
      }
    } else {
      // No coincidencia, volvemos a voltear las cartas
      card1.classList.remove('flipped')
      card2.classList.remove('flipped')

      card1.querySelector('.content-container').classList.remove('revealed')
      card2.querySelector('.content-container').classList.remove('revealed')

      crearMensaje("INCORRECTO")
      aciertosEnemigo++
      spanAciertosEnemigo.innerHTML = aciertosEnemigo
    }

    flippedCards = [];
}



function siguienteNivel(nivel) {

    if (nivel === 'nivel1') {
        window.location.href = 'tatMateLvl2.html'
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatMateLvl3.html'
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatMateLvl4.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatMateLvl5.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatMateLvl6.html'
    } else if (nivel === 'nivel6') {
        window.location.href = 'tatMateLvl7.html'
    } else if (nivel === 'nivel7') {
        window.location.href = 'tatMateLvl8.html'
    } else {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel despues a este')
    }
}

function siguienteNivelLeng(nivel) {

    if (nivel === 'nivel1') {
        window.location.href = 'tatLegLvl2.html'
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatLegLvl3.html'
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatLegLvl4.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatLegLvl5.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatLegLvl6.html'
    } else {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel despues a este')
    }
}

function siguienteNivelEmo(nivel) {

    if (nivel === 'nivel1') {
        window.location.href = 'tatEmoLvl2.html'
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatEmoLvl3.html'
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatEmoLvl4.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatEmoLvl5.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatEmoLvl6.html'
    } else if (nivel === 'nivel6') {
        window.location.href = 'tatEmoLvl7.html'
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
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatMateLvl2.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatMateLvl3.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatMateLvl4.html'
    } else if (nivel === 'nivel6') {
        window.location.href = 'tatMateLvl5.html'
    } else if (nivel === 'nivel7') {
        window.location.href = 'tatMateLvl6.html'
    } else {
        window.location.href = 'tatMateLvl7.html'
    }
}

function anteriorNivelLeng(nivel) {

    if (nivel === 'nivel1') {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel anterior a este')
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatLegLvl1.html'
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatLegLvl2.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatLegLvl3.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatLegLvl4.html'
    } else {
        window.location.href = 'tatLegLvl5.html'
    }
}

function anteriorNivelEmo(nivel) {

    if (nivel === 'nivel1') {
        document.getElementById('anterior-lvl').display = true
        alert('No hay un nivel anterior a este')
    } else if (nivel === 'nivel2') {
        window.location.href = 'tatEmoLvl1.html'
    } else if (nivel === 'nivel3') {
        window.location.href = 'tatEmoLvl2.html'
    } else if (nivel === 'nivel4') {
        window.location.href = 'tatEmoLvl3.html'
    } else if (nivel === 'nivel5') {
        window.location.href = 'tatEmoLvl4.html'
    } else if (nivel === 'nivel6') {
        window.location.href = 'tatEmoLvl5.html'
    } else {
        window.location.href = 'tatEmoLvl6.html'
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
        
    } else {
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
        document.getElementById('espacio-label-nivel-one-k').innerText = listOne[10]
        document.getElementById('espacio-label-nivel-one-l').innerText = listOne[11]
        document.getElementById('espacio-label-nivel-one-m').innerText = listOne[12]
        document.getElementById('espacio-label-nivel-one-n').innerText = listOne[13]
        document.getElementById('espacio-label-nivel-one-o').innerText = listOne[14]
        
    }
}

function espacioLabelNivelOneLeng(nivel) {
    
    listTwo.sort(function(a, b) {return 0.5 - Math.random()})

    if (nivel === 'nivel1') {
        document.getElementById('espacio-label-nivel-one-a').innerText = listTwo[0]
        document.getElementById('espacio-label-nivel-one-b').innerText = listTwo[1]
        document.getElementById('espacio-label-nivel-one-c').innerText = listTwo[2]
        document.getElementById('espacio-label-nivel-one-d').innerText = listTwo[3]
        document.getElementById('espacio-label-nivel-one-e').innerText = listTwo[4]
    } else if (nivel === 'nivel2') {
        document.getElementById('espacio-label-nivel-one-a').innerText = listTwo[0]
        document.getElementById('espacio-label-nivel-one-b').innerText = listTwo[1]
        document.getElementById('espacio-label-nivel-one-c').innerText = listTwo[2]
        document.getElementById('espacio-label-nivel-one-d').innerText = listTwo[3]
        document.getElementById('espacio-label-nivel-one-e').innerText = listTwo[4]
        document.getElementById('espacio-label-nivel-one-f').innerText = listTwo[5]
        document.getElementById('espacio-label-nivel-one-g').innerText = listTwo[6]
        document.getElementById('espacio-label-nivel-one-h').innerText = listTwo[7]
        document.getElementById('espacio-label-nivel-one-i').innerText = listTwo[8]
        document.getElementById('espacio-label-nivel-one-j').innerText = listTwo[9]
        
    } else {
        document.getElementById('espacio-label-nivel-one-a').innerText = listTwo[0]
        document.getElementById('espacio-label-nivel-one-b').innerText = listTwo[1]
        document.getElementById('espacio-label-nivel-one-c').innerText = listTwo[2]
        document.getElementById('espacio-label-nivel-one-d').innerText = listTwo[3]
        document.getElementById('espacio-label-nivel-one-e').innerText = listTwo[4]
        document.getElementById('espacio-label-nivel-one-f').innerText = listTwo[5]
        document.getElementById('espacio-label-nivel-one-g').innerText = listTwo[6]
        document.getElementById('espacio-label-nivel-one-h').innerText = listTwo[7]
        document.getElementById('espacio-label-nivel-one-i').innerText = listTwo[8]
        document.getElementById('espacio-label-nivel-one-j').innerText = listTwo[9]
        document.getElementById('espacio-label-nivel-one-k').innerText = listTwo[10]
        document.getElementById('espacio-label-nivel-one-l').innerText = listTwo[11]
        document.getElementById('espacio-label-nivel-one-m').innerText = listTwo[12]
        document.getElementById('espacio-label-nivel-one-n').innerText = listTwo[13]
        document.getElementById('espacio-label-nivel-one-o').innerText = listTwo[14]
        
    }
}

function guardarDatos() {
    const tiempoTotal = formatearTiempo(tiempoTranscurrido)
    const tablaDatos = document.getElementById('tablaDatos')
    const fila = tablaDatos.insertRow()
    const celdaTiempo = fila.innerHTML = tiempoTotal
}

function espacioNivelOne(nivel) {
        if(listSolitoOne.length === 0) {

            revisarVictoriaLvlOne(nivel)

            clearInterval(temporizador)
            guardarDatos()

            return
        } else {
            indiceAleatorio = Math.floor(Math.random() * listSolitoOne.length)
            numeroSeleccionado = listSolitoOne.splice(indiceAleatorio, 1)[0]

            document.getElementById('espacio-nivel-one').innerText = numeroSeleccionado
        }

}

function espacioNivelOneLeng(nivel) {
    if(listSolitoTwo.length === 0) {

        revisarVictoriaLvlOne(nivel)
        clearInterval(temporizador)
        guardarDatos()
        return
    } else {
        indiceAleatorio = Math.floor(Math.random() * listSolitoTwo.length)
        numeroSeleccionado = listSolitoTwo.splice(indiceAleatorio, 1)[0]

        document.getElementById('espacio-nivel-one').innerText = numeroSeleccionado
        document.getElementById('espacio-nivel-one-one').innerText = numeroSeleccionado
    }

}

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

function verificarAciertosLvlOne(nivel) {
    var contenidoLabel = document.getElementById('espacio-label-nivel-one-a').innerText
    var contenidoLabe2 = document.getElementById('espacio-label-nivel-one-b').innerText
    var contenidoLabe3 = document.getElementById('espacio-label-nivel-one-c').innerText
    var contenidoLabe4 = document.getElementById('espacio-label-nivel-one-d').innerText
    var contenidoLabe5 = document.getElementById('espacio-label-nivel-one-e').innerText
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
    } else if (nivel === 'nivel2') {
        var contenidoLabe6 = document.getElementById('espacio-label-nivel-one-f').innerText
        var contenidoLabe7 = document.getElementById('espacio-label-nivel-one-g').innerText
        var contenidoLabe8 = document.getElementById('espacio-label-nivel-one-h').innerText
        var contenidoLabe9 = document.getElementById('espacio-label-nivel-one-i').innerText
        var contenidoLabe10 = document.getElementById('espacio-label-nivel-one-j').innerText
        
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
        }
    } else if(nivel === 'nivel3') {
        var contenidoLabe6 = document.getElementById('espacio-label-nivel-one-f').innerText
        var contenidoLabe7 = document.getElementById('espacio-label-nivel-one-g').innerText
        var contenidoLabe8 = document.getElementById('espacio-label-nivel-one-h').innerText
        var contenidoLabe9 = document.getElementById('espacio-label-nivel-one-i').innerText
        var contenidoLabe10 = document.getElementById('espacio-label-nivel-one-j').innerText
        var contenidoLabe11 = document.getElementById('espacio-label-nivel-one-k').innerText
        var contenidoLabe12 = document.getElementById('espacio-label-nivel-one-l').innerText
        var contenidoLabe13 = document.getElementById('espacio-label-nivel-one-m').innerText
        var contenidoLabe14 = document.getElementById('espacio-label-nivel-one-n').innerText
        var contenidoLabe15 = document.getElementById('espacio-label-nivel-one-o').innerText
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
        } else if (inputSexoAleatorioeleven.checked) {
            if (contenidoLabe11 == contenidoLabePrincipal) {
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
        } else if (inputSexoAleatoriotwelve.checked) {
            if (contenidoLabe12 == contenidoLabePrincipal) {
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
        } else if (inputSexoAleatoriothirteen.checked) {
            if (contenidoLabe13 == contenidoLabePrincipal) {
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
        } else if (inputSexoAleatoriofourteen.checked) {
            if (contenidoLabe14 == contenidoLabePrincipal) {
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
        } else if (inputSexoAleatoriofifteen.checked) {
            if (contenidoLabe15 == contenidoLabePrincipal) {
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
}

function verificarAciertosLvlOneLeng(nivel) {
   
    var contenidoLabel = document.getElementById('espacio-label-nivel-one-a').innerText
    var contenidoLabe2 = document.getElementById('espacio-label-nivel-one-b').innerText
    var contenidoLabe3 = document.getElementById('espacio-label-nivel-one-c').innerText
    var contenidoLabe4 = document.getElementById('espacio-label-nivel-one-d').innerText
    var contenidoLabe5 = document.getElementById('espacio-label-nivel-one-e').innerText
    var contenidoLabePrincipal = document.getElementById('espacio-nivel-one').innerText

    if (nivel === 'nivel1') {
        if (inputSexoAleatorioone.checked) {
            if(contenidoLabel == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriotwo.checked) {
            if (contenidoLabe2 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriothree.checked) {
            if (contenidoLabe3 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofour.checked) {
            if (contenidoLabe4 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofive.checked) {
            if (contenidoLabe5 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else {
            alert('Selecciona un juego')
        }
    } else if (nivel === 'nivel2') {
        var contenidoLabe6 = document.getElementById('espacio-label-nivel-one-f').innerText
        var contenidoLabe7 = document.getElementById('espacio-label-nivel-one-g').innerText
        var contenidoLabe8 = document.getElementById('espacio-label-nivel-one-h').innerText
        var contenidoLabe9 = document.getElementById('espacio-label-nivel-one-i').innerText
        var contenidoLabe10 = document.getElementById('espacio-label-nivel-one-j').innerText
        if (inputSexoAleatorioone.checked) {
            if(contenidoLabel == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriotwo.checked) {
            if (contenidoLabe2 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriothree.checked) {
            if (contenidoLabe3 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofour.checked) {
            if (contenidoLabe4 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofive.checked) {
            if (contenidoLabe5 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriosix.checked) {
            if (contenidoLabe6 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            }
        } else if (inputSexoAleatorioseven.checked) {
            if (contenidoLabe7 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorioeight.checked) {
            if (contenidoLabe8 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorionine.checked) {
            if (contenidoLabe9 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorioten.checked) {
            if (contenidoLabe10 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else {
            alert('Selecciona un juego')
        }
    } else if(nivel === 'nivel3') {
        var contenidoLabe6 = document.getElementById('espacio-label-nivel-one-f').innerText
        var contenidoLabe7 = document.getElementById('espacio-label-nivel-one-g').innerText
        var contenidoLabe8 = document.getElementById('espacio-label-nivel-one-h').innerText
        var contenidoLabe9 = document.getElementById('espacio-label-nivel-one-i').innerText
        var contenidoLabe10 = document.getElementById('espacio-label-nivel-one-j').innerText
        var contenidoLabe11 = document.getElementById('espacio-label-nivel-one-k').innerText
        var contenidoLabe12 = document.getElementById('espacio-label-nivel-one-l').innerText
        var contenidoLabe13 = document.getElementById('espacio-label-nivel-one-m').innerText
        var contenidoLabe14 = document.getElementById('espacio-label-nivel-one-n').innerText
        var contenidoLabe15 = document.getElementById('espacio-label-nivel-one-o').innerText
        if (inputSexoAleatorioone.checked) {
            if(contenidoLabel == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriotwo.checked) {
            if (contenidoLabe2 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriothree.checked) {
            if (contenidoLabe3 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofour.checked) {
            if (contenidoLabe4 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofive.checked) {
            if (contenidoLabe5 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriosix.checked) {
            if (contenidoLabe6 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            }
        } else if (inputSexoAleatorioseven.checked) {
            if (contenidoLabe7 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorioeight.checked) {
            if (contenidoLabe8 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorionine.checked) {
            if (contenidoLabe9 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorioten.checked) {
            if (contenidoLabe10 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatorioeleven.checked) {
            if (contenidoLabe11 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)

            }
        } else if (inputSexoAleatoriotwelve.checked) {
            if (contenidoLabe12 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriothirteen.checked) {
            if (contenidoLabe13 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofourteen.checked) {
            if (contenidoLabe14 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else if (inputSexoAleatoriofifteen.checked) {
            if (contenidoLabe15 == contenidoLabePrincipal) {
                crearMensaje("CORRECTO")
                aciertosJugador++
                spanAciertosJugador.innerHTML = aciertosJugador
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            } else {
                crearMensaje("INCORRECTO")
                aciertosEnemigo++
                spanAciertosEnemigo.innerHTML = aciertosEnemigo
                espacioLabelNivelOneLeng(nivel)
                espacioNivelOneLeng(nivel)
            }
        } else {
            alert('Selecciona un juego')
        }
    }
    
}

function crearMensaje(resultado) {
    let nuevoAciertoDelJugador = document.createElement('p')
    let nuevoAciertoDelEnemigo = document.createElement('p')
    sectionMensajes.innerHTML = resultado
    nuevoAciertoDelJugador.innerHTML = indexAciertoJugador
    nuevoAciertoDelEnemigo.innerHTML = indexAciertoEnemigo
}

function revisarVictoriaLvlOne(nivel) {
    if (nivel === 'nivel1') {
        if (aciertosJugador == 5) {
            crearMensajeFinal("¡¡FELICIDADES!!")
        } else {
            crearMensajeFinal('¡¡INTENTALO DE NUEVO!!')
        }
    } else if (nivel === 'nivel2') {
        if (aciertosJugador == 10) {
            crearMensajeFinal("¡¡FELICIDADES!!")
        } else {
            crearMensajeFinal('¡¡INTENTALO DE NUEVO!!')
        }
    } else {
        if (aciertosJugador == 15) {
            crearMensajeFinal("¡¡FELICIDADES!!")
        } else {
            crearMensajeFinal("¡¡INTENTALO DE NUEVO!!")
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

window.addEventListener('load', verificarSection)

window.addEventListener('beforeunload', function (event) {
    const mensaje = "¿Estás seguro de que quieres abandonar la página? Se perderael avance con el tiempo";
    const resultado = window.confirm(mensaje);
    
    if (!resultado) {
        event.returnValue = "";
    }
})