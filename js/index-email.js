const emailInput = document.getElementById("emailInput");
const subscribeButton = document.getElementById("subscribeButton");
const subscribeMessage = document.getElementById("subscribeMessage");

// Función para validar correo
function validateEmail() {
  const emailValue = emailInput.value.trim();

  // Expresión regular para validar el formato de correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailValue)) {
    subscribeMessage.style.display = "block";
    subscribeMessage.style.color = "green";
    subscribeMessage.textContent = "¡Te has registrado a las ofertas!";
    emailInput.value = ""; // Limpia el campo
  } else {
    subscribeMessage.style.display = "block";
    subscribeMessage.style.color = "red";
    subscribeMessage.textContent = "Por favor, ingresa un correo válido.";
  }
}

// Evento al hacer clic en el botón
subscribeButton.addEventListener("click", validateEmail);