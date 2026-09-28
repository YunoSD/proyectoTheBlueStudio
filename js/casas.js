const casasScroll = document.querySelector('.casasScroll');
const slides = document.querySelectorAll('.carruselSlide');
const dots = document.querySelectorAll('.carruselDots .dot');

function activarIndice(indice) {
	slides.forEach((slide, i) => {
		slide.classList.toggle('activo', i === indice);
	});

	dots.forEach((dot, i) => {
		dot.classList.toggle('activo', i === indice);
	});
}

if (casasScroll) {

	function actualizarCarrusel() {

		const rect = casasScroll.getBoundingClientRect();
		const alturaVentana = window.innerHeight;

		const distanciaTotal = rect.height - alturaVentana;

		let progreso = -rect.top / distanciaTotal;
		progreso = Math.max(0, Math.min(0.999, progreso));

		const indiceActivo = Math.floor(progreso * slides.length);

		activarIndice(indiceActivo);
	}

	window.addEventListener('scroll', actualizarCarrusel);
	window.addEventListener('resize', actualizarCarrusel);
	actualizarCarrusel();
}