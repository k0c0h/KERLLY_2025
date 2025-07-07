let index = 0;
let carrusel = null;

function moverSlide(direccion) {
  if (!carrusel) return;

  const totalSlides = carrusel.children.length;
  index += direccion;

  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;

  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

// Llama esto al cargar la sección en la SPA
function inicializarCarrusel() {
  carrusel = document.getElementById("carruselMaterias");
  index = 0;
  if (carrusel) carrusel.style.transform = `translateX(0%)`;
}
