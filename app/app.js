// Inicialización de la app express
const express = require('express');
const app = express();

// ruta '/'
app.get('/', (req, res) => {
  res.send('Wellcome to node server');
});

// ruta '/about'
app.get('/about', (req, res) => {
  res.sendFile(__dirname+'/views/about.html');
});

// API REST

// middleware for applying CORS only to expose our entire API
app.use('/api', require('cors')());

// middleware to support JSON-encoded bodies
app.use(express.json());       

// ruta '/api/datos'
// tratamiento de petición GET (enviada por el cliente para recibir datos)
app.get('/api/datos', function(req, res){

// datos a enviar (lecturas de sensores de un sistema IoT simulado controlado desde el servidor)
const datosClima = {
    temperatura: (Math.random() * (30 - 15) + 15).toFixed(2),
    humedad: `${Math.floor(Math.random() * 100)}%`,
    timestamp: new Date().toISOString()
};

// envío de los datos
res.json(datosClima);
});

module.exports = app;