function validateLoginForm() {
    // Obtener los valores de los campos de email y contraseña
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validación de campos
    if (email === '' || password === '') {
        alert('Por favor, complete ambos campos.');
        return false;
    }
    
    // Aquí puedes agregar más validaciones según sea necesario (por ejemplo, validación del formato de email)
    
    // Si la validación es exitosa, mostrar el modal de bienvenida
    const welcomeModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    const modalEmail = document.getElementById('modalEmail');
    
    // Mostrar el correo en el modal
    modalEmail.textContent = email;
    
    welcomeModal.show();
    
    // Evitar el envío real del formulario
    return false;
}

// Función para redirigir a la página principal
function redirectToHome() {
    window.location.href = 'index.html';
}
