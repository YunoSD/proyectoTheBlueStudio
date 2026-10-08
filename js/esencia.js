const zona = document.querySelector('.esenciaScroll');
const casa = zona.querySelector('img');
const texto = zona.querySelector('.textoEsencia');

function animar() {
	const rect = zona.getBoundingClientRect();
	const distancia = rect.height - window.innerHeight;

	let progreso = -rect.top / distancia;
	progreso = Math.max(0, Math.min(1, progreso));

	let aparicion;

	if (window.innerWidth > 800) {
		casa.style.transform = `translateX(${-30 * progreso}%)`;
		aparicion = (progreso - 0.25) / 0.5;
	} else {
		casa.style.transform = "none";
		aparicion = (window.innerHeight - rect.top) / window.innerHeight;
	}

	aparicion = Math.max(0, Math.min(1, aparicion));

	texto.style.opacity = aparicion;
	texto.style.transform = `translateY(${50 - 50 * aparicion}px)`;
}

window.addEventListener('scroll', animar);
window.addEventListener('resize', animar);
animar();