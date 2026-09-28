const contador = document.getElementById("contadorHuella");

let numero = 0;
const objetivo = 9922;

function pintar() {
	contador.textContent = Math.round(numero).toLocaleString("en-US") + " kg";
}

const subida = setInterval(() => {
	numero += (objetivo - numero) * 0.05;
	pintar();

	if (objetivo - numero < 1) {
		numero = objetivo;
		pintar();
		clearInterval(subida);
		empezarACrecer();
	}
}, 20);

function empezarACrecer() {
	setInterval(() => {
		numero += Math.floor(Math.random() * 5) + 1;
		pintar();

		contador.classList.add("sube");
		setTimeout(() => contador.classList.remove("sube"), 400);
	}, 3000);
}