export function pintarAhorcado(canvasId, fallos) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");

    switch (fallos) {
        case 1:
            linea1(context);
            break;
        case 2:
            linea2(context);
            break;
        case 3:
            linea3(context);
            break;
        case 4:
            linea4(context);
            break;
        case 5:
            cabeza(context);
            break;
        case 6:
            torso(context);
            break;
        case 7:
            bD(context);
            break;
        case 8:
            bI(context);
            break;
        case 9:
            pD(context);
            break;
        case 10:
            pI(context);
            escribirMensaje(context, '¡Has perdido, fin del juego!');
            break;
        default:
            break;
    }
}

function cabeza(ctx) {
    ctx.beginPath();
    ctx.arc(60, 25, 10, 0, 2 * Math.PI, true);
    ctx.stroke();
}

function dibujar(ctx, $deX, $deY, $aX, $aY) {
    ctx.moveTo($deX, $deY);
    ctx.lineTo($aX, $aY);
    ctx.stroke();
}

function escribirMensaje(ctx, mensaje) {
    ctx.font = 'italic 18pt Calibri';
    ctx.fillText(mensaje, 30, 130);
}

function linea1(ctx) {
    dibujar(ctx, 0, 150, 150, 150);
}

function linea2(ctx) {
    dibujar(ctx, 10, 0, 10, 600);
}

function linea3(ctx) {
    dibujar(ctx, 0, 5, 70, 5);
}

function linea4(ctx) {
    dibujar(ctx, 60, 5, 60, 15);
}

function torso(ctx) {
    dibujar(ctx, 60, 36, 60, 70);
}

function bD(ctx) {
    dibujar(ctx, 60, 46, 100, 50);
}

function bI(ctx) {
    dibujar(ctx, 60, 46, 20, 50);
}

function pD(ctx) {
    dibujar(ctx, 60, 70, 100, 100);
}

function pI(ctx) {
    dibujar(ctx, 60, 70, 20, 100);
}

