function validateCredentials() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Realiza la verificación de las credenciales (puedes utilizar AJAX aquí)
    // Aquí he puesto una condición simple para el ejemplo
    if (username === 'usuarioValido' && password === 'contrasenaValida') {
        // Redirige a Google si las credenciales son válidas
        window.location.href = 'https://www.google.com';
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        alert('Credenciales incorrectas. Por favor, ingresa un usuario y una contraseña válidos.');
    }
}
