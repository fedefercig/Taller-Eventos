document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Captura los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    
        // Crea un objeto con los datos
        const data = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };
    
        // Realiza la solicitud POST
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            console.log('Respuesta del servidor:', responseData);
        })
        .catch(error => {
            console.error('Error al enviar la solicitud:', error);
        });
    });
});
