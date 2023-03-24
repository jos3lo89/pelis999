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
		1400: {
			slidesPerView: 5,
		},
	},
	// keyboard: {
	// 	enabled: true,
	// },

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
	keyboard: {
		enabled: true,
	},
});



// swiper de top 10 pelis999
var swiper = new Swiper(".swiperTop10", {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiperSiguiente",
		prevEl: ".swiperAtras",
	},
	breakpoints: {
		280: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		370: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		572: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		858: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1105: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1400: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
		1800: {
			slidesPerView: 7,
			spaceBetween: 20,
		},
	},

	autoplay: {
		delay: 7000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false,
	},
});