const express = require('express');

const app = express();
const port = 3001;

//console.log(app);
app.get('/', function(req, res) {
    res.send('<h1>Hola Mundo!</h1>')
})

app.listen(port, function() {
    console.log(`el sevidor esta corriendo en el puerto ${port}`);
})