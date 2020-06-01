const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuarip: 'Admin',
        mensaje: 'Welcome to this App!'
    });

    client.on('disconnect', () => {

        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'Everything was right!!'
            });
        } else {
            callback({
                resp: 'Everything was wrong!!'
            });
        }
        */
    });
});