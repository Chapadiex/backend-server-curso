//Requieres
var express = require('express');
var mongoose = require('mongoose');


//Inicializar Variables 
var app = express();

//Conexion
mongoose.connection.openUri('mongodb://Chapa14:Chapa14@ds161446.mlab.com:61446/chapa_style', (err, res) => {
    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'ON LINE');
});

//Inicializar Variables 
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente.'
    });
});

//Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express sercer en puerto 3000: \x1b[32m%s\x1b[0m', 'ON LINE');
});