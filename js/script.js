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

// swiper js
var swiper = new Swiper(".course-slider", {
	loop: true,
	// grabCursor: true,
	// centeredSlides: true,
	// slidesPerView: 1,
	spaceBetween: 5,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		550: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
	keyboard: {
		enabled: true,
	},

	autoplay: {
		delay: 5000, //auto-play cada 5 sec
		pauseOnMouseEnter: true, //pasa maus y pausa slides
		disableOnInteraction: false, //vuelva a lo mismo
	},
});

// swiper grande
var swiper = new Swiper(".swiperGrande", {
	loop: true,
	autoplay: {
		delay: 5000, //auto-play cada 5 sec
		pauseOnMouseEnter: true, //pasa maus y pausa slides
		disableOnInteraction: false, //vuelva a lo mismo
	},
});