const express = require('express');
const app = express();
const port = 3001;

app.get('/', function(req, res) {
    res.send('<h1>Hola Mundo!</h1>')
})

app.listen(port, function() {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
})