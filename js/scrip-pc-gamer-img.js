// Seleccionamos todas las imágenes del producto
const productImages = document.querySelectorAll('.product-card img');

// Seleccionamos el modal y sus elementos
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Añadimos un evento a cada imagen para que abra el modal al hacer clic
productImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block'; // Mostramos el modal
    modalImage.src = image.getAttribute('data-image'); // Cambiamos la imagen del modal
  });
});

// Cerramos el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerramos el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
