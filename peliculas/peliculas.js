// header start
let menuBtn = document.querySelector("#menu-btn");
let navBar = document.querySelector(".header .flex .navbar");

menuBtn.addEventListener("click", () => {
	navBar.classList.toggle("active");
	menuBtn.classList.toggle("fa-times");
});

document.addEventListener("click", (event) => {
	if (event.target.closest(".header")) {
		return;
	}
	navBar.classList.remove("active");
	menuBtn.classList.remove("fa-times");
});
// header end

// para el boton busqueda
let searchBtn = document.querySelector("#boton");
searchBtn.addEventListener("click", () => {
	searchBtn.classList.toggle("fa-times");
});

// busqueda start
function mostrarCaja() {
	var caja = document.getElementById("caja");
	if (caja.style.display === "none") {
		caja.style.display = "block";
	} else {
		caja.style.display = "none";
	}
}

// Mostramos la caja al cargar la página
mostrarCaja();
// busqueda end

// Obtener la lista de capítulos
const chapterList = document.querySelector(".chapter-list");

// Obtener el iframe del reproductor de video
const videoIframe = document.getElementById("video-iframe");

// Agregar un controlador de eventos clic a cada elemento li de la lista de capítulos
chapterList.querySelectorAll("li").forEach((chapter) => {
	chapter.addEventListener("click", () => {
		// Obtener el src del video correspondiente al capítulo seleccionado
		const videoSrc = chapter.getAttribute("data-src");

		// Actualizar el src del iframe del reproductor de video
		videoIframe.src = videoSrc;

		// Agregar la clase 'active' al elemento li que se hizo clic
		chapterList.querySelectorAll("li").forEach((li) => {
			li.classList.remove("active");
		});

		chapter.classList.add("active");
	});

	// Agregar un controlador de eventos hover al elemento li
	chapter.addEventListener("mouseover", () => {
		// Cambiar el color de fondo del elemento li cuando se pasa el mouse sobre él
		chapter.classList.add("hover");
	});

	chapter.addEventListener("mouseout", () => {
		// Cambiar el color de fondo del elemento li cuando se deja de pasar el mouse sobre él
		chapter.classList.remove("hover");
	});
});
