const zona = document.querySelector('.esenciaScroll');
const casa = zona.querySelector('img');
const texto = zona.querySelector('.textoEsencia');

function animar() {
	const rect = zona.getBoundingClientRect();
	const distancia = rect.height - window.innerHeight;

	let progreso = -rect.top / distancia;
	progreso = Math.max(0, Math.min(1, progreso));

	casa.style.transform = `translateX(${-30 * progreso}%)`;

	let aparicion = (progreso - 0.25) / 0.5;
	aparicion = Math.max(0, Math.min(1, aparicion));

	texto.style.opacity = aparicion;
	texto.style.transform = `translateX(${100 - 100 * aparicion}px)`;
}

window.addEventListener('scroll', animar);
window.addEventListener('resize', animar);
animar();