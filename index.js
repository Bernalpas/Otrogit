const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const PORT = process.env.PORT || 3000;


const app = express();

//middelwares: funciones que están entre la peticion y la respuesta
const miMiddeleware = (req, res, next) => {
    console.log('Hola soy un middleware');
    next();
};

app.use(miMiddeleware);
app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/ofertas', (req, res) => {
    res.sendFile('ofertas.html', {root: __dirname + '/public'});
});


app.listen(PORT, (err) => {
    if(err) console.log(err)
    console.log(`Server is running on port http://localhost:${PORT}`);
});



