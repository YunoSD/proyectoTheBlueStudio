(function () {
	const header = document.querySelector("header");
	const carrusel = document.querySelector(".casasCarrusel");
	const bloqueCasas = document.querySelector(".casasScroll");

	let ultimoScroll = 0;

	function ajustar() {
		const alto = header.offsetHeight;
        document.body.style.paddingTop = alto + "px";

		if (bloqueCasas) {
			bloqueCasas.style.marginTop = -alto + "px";
		}
		if (carrusel) {
			carrusel.style.paddingTop = header.classList.contains("hide") ? "20px" : (alto + 20) + "px";
		}
	}

	window.addEventListener("scroll", () => {
		const scrollActual = window.scrollY;

		if (scrollActual <= 0) {
			header.classList.remove("hide", "conFondo");
			ajustar();
			ultimoScroll = 0;
			return;
		}

		header.classList.add("conFondo");

		if (Math.abs(scrollActual - ultimoScroll) < 5) return;

		if (scrollActual > ultimoScroll) {
			header.classList.add("hide");
		} else {
			header.classList.remove("hide");
		}

		ajustar();
		ultimoScroll = scrollActual;
	});

	window.addEventListener("resize", ajustar);
	ajustar();
})();