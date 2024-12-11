function validateRegisterForm() {
    // Limpiar los mensajes de error previos
    let errorMessages = [];
    
    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validación de Nombre
    if (name === '') {
        errorMessages.push('El campo "Nombre" es obligatorio.');
    }
    
    // Validación de Apellidos
    if (surname === '') {
        errorMessages.push('El campo "Apellidos" es obligatorio.');
    }
    
    // Validación de Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        errorMessages.push('El campo "Email" es obligatorio.');
    } else if (!emailPattern.test(email)) {
        errorMessages.push('Por favor ingrese un correo electrónico válido.');
    }
    
    // Validación de Contraseña
    if (password === '') {
        errorMessages.push('El campo "Contraseña" es obligatorio.');
    } else if (password.length < 6) {
        errorMessages.push('La contraseña debe tener al menos 6 caracteres.');
    }
    
    // Mostrar los mensajes de error si los hay
    if (errorMessages.length > 0) {
        alert(errorMessages.join('\n'));  // Mostrar errores en un alert
        return false;  // Previene el envío del formulario
    }
    
    // Si la validación es exitosa, mostrar el modal de éxito
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    
    // Redirigir al index.html cuando el modal se cierra
    const closeButton = document.querySelector('#successModal .btn-secondary');
    closeButton.addEventListener('click', function () {
        window.location.href = 'iniciar-sesion.html';
    });
    
    return false;  // Evita el envío real del formulario para que se vea el modal
}

