const esenciaScroll = document.querySelector('.esencia-scroll');
const esencia = document.querySelector('.esencia');

const imagen = esencia.querySelector('img');
const titulo = esencia.querySelector('h2');
const texto = esencia.querySelector('.textoEsencia');


function animarEsencia() {

    const rect = esenciaScroll.getBoundingClientRect();

    const alturaVentana = window.innerHeight;

    /*
    Calculamos cuánto hemos avanzado
    dentro del espacio de animación.
    */

    const distanciaTotal = rect.height - alturaVentana;

    let progreso = -rect.top / distanciaTotal;

    /*
    Limitamos el progreso entre 0 y 1
    */

    progreso = Math.max(0, Math.min(1, progreso));


    /*
    =================================
    CASA
    =================================

    Al principio:
    translateX(0)

    Al final:
    translateX(-30%)
    */

    const movimientoCasa = -30 * progreso;

    imagen.style.transform =
        `translateX(${movimientoCasa}%)`;


    /*
    =================================
    TITULO
    =================================

    También se mueve ligeramente
    hacia la izquierda.
    */

    const movimientoTitulo = -30 * progreso;

    titulo.style.transform =
        `translateX(calc(-50% + ${movimientoTitulo}px))`;


    /*
    =================================
    TEXTO
    =================================

    Aparece aproximadamente a
    partir del 25% del scroll.
    */

    let aparicionTexto =
        (progreso - 0.25) / 0.50;

    aparicionTexto =
        Math.max(0, Math.min(1, aparicionTexto));


    texto.style.opacity = aparicionTexto;


    /*
    El texto comienza desplazado
    hacia la derecha y termina
    en su posición normal.
    */

    const movimientoTexto =
        150 - (150 * aparicionTexto);

    texto.style.transform =
        `translateY(-50%) translateX(${movimientoTexto}px)`;
}


window.addEventListener('scroll', animarEsencia);

window.addEventListener('resize', animarEsencia);

animarEsencia();