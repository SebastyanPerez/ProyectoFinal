// Función genérica para inicializar un carrusel
function initializeCarousel(carouselSelector, prevButtonSelector, nextButtonSelector, itemClass) {
  const carousel = document.querySelector(carouselSelector);
  const prevButton = document.querySelector(prevButtonSelector);
  const nextButton = document.querySelector(nextButtonSelector);

  // Variable para rastrear la posición actual
  let currentIndex = 0;

  // Calcular cuántos elementos caben por vista
  function getItemsPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 480) {
      return 1; // Mostrar 1 producto en pantallas pequeñas
    } else if (screenWidth <= 768) {
      return 2; // Mostrar 2 productos en pantallas medianas
    } else if (screenWidth <= 1024) {
      return 3; // Mostrar 3 productos en pantallas grandes
    } else {
      return 4; // Mostrar 4 productos en pantallas muy grandes
    }
  }

  // Mover el carrusel
  function updateCarouselPosition() {
    const itemsPerView = getItemsPerView();
    const itemWidth = carousel.querySelector(itemClass).offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Botón de siguiente
  nextButton.addEventListener('click', () => {
    const itemsPerView = getItemsPerView();
    const totalItems = carousel.querySelectorAll(itemClass).length;

    if (currentIndex < totalItems - itemsPerView) {
      currentIndex++;
      updateCarouselPosition();
    }
  });

  // Botón de anterior
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarouselPosition();
    }
  });

  // Actualizar posición del carrusel al cambiar el tamaño de la ventana
  window.addEventListener('resize', updateCarouselPosition);

  // Configuración inicial
  updateCarouselPosition();
}

// Inicializa los carruseles con diferentes clases
initializeCarousel('.carousel-microfonos', '.carousel-btn.prev', '.carousel-btn.next', '.carousel-item-microfonos');
initializeCarousel('.carousel-kits', '.carousel-btn-kits.prev', '.carousel-btn-kits.next', '.carousel-item-kits');



