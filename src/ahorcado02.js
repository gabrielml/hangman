let game;

function nuevaPartida() {
    game = newGame(['madrid', 'seat', 'naranja']);
    pintarCasillas(game.word, game.hits, 'casillas');
}

function siguienteLetra(letra) {
    try {
        game.guess(letra);
        pintarAhorcado('ahorcado', 10 - game.tries);
        pintarCasillas(game.word, game.hits, 'casillas');

        if (game.result === 1) {
            alert('¡Enhorabuena, has ganado!');
        }
    } catch (excepcion) {
        alert(excepcion.message);
    }
}

function pintarTeclado(idContenedor) {
    const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const superficie = document.getElementById(idContenedor);
    const teclado = document.createElement('ul');

    teclado.id = 'teclas';

    for (let i = 0; i < letras.length; i++) {
        const tecla = document.createElement('li');

        tecla.innerHTML = letras[i];
        tecla.onclick = () => siguienteLetra(letras[i]);
        teclado.appendChild(tecla);
    }

    superficie.appendChild(teclado);
}


function pintarCasillas(palabra, aciertos, idContenedor) {
    const contenedorCasillas = document.getElementById(idContenedor);
    const fila = document.createElement('ul');

    contenedorCasillas.innerHTML = '';
    fila.id = 'fila';

    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i];
        const casilla = document.createElement('li');

        casilla.innerHTML = aciertos.includes(letra) ? letra : 'X';
        fila.appendChild(casilla);
    }

    contenedorCasillas.appendChild(fila);
}

$(document).ready(function () {
    pintarTeclado('teclado');

    $('.botones').on('click', '.jugar', function () {
        nuevaPartida();
        $('.tablero').slideDown();
    });


    $('.botones').on('click', '.borrar', function () {
        nuevaPartida();
    });
});
