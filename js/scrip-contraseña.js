function validateRecoverForm() {
    // Obtener el valor del campo email
    const email = document.getElementById('email').value.trim();
    
    // Validación de campo
    if (email === '') {
        alert('Por favor, ingresa tu email.');
        return false;
    }
    
    // Aquí podrías agregar más validaciones de formato de email si es necesario
    
    // Si la validación es exitosa, mostrar el modal de confirmación
    const recoverModal = new bootstrap.Modal(document.getElementById('recoverModal'));
    const modalEmail = document.getElementById('modalEmail');
    
    // Mostrar el correo en el modal
    modalEmail.textContent = email;
    
    recoverModal.show();
    
    // Evitar el envío real del formulario
    return false;
}

// Función para redirigir a la página principal
function redirectToHome() {
    window.location.href = 'iniciar-sesion.html';
}
