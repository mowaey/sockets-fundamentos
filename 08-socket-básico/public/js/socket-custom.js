var socket = io();

// Escuchar información
socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con servidor');
});

// Envíar información
socket.emit('enviarMensaje', {
    usuario: 'Rubén',
    mensaje: 'Hi World!'
}, function(resp) {

    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor', mensaje);
});