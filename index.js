const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000; //CONFIGURO PUERTO HEROKU

var corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//Middleware --> FUNCIONES QUE SE EJECUTARÁN SIEMPRE ANTES DE CUALQUIER ACCIÓN QUE HAGAMOS DE APP
app.use(morgan('combined', { stream: logger.stream }));//GENERO LOGS
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS

//RUTAS
app.get('/', (req, res) => {res.send('Bienvenidos a nuestro VideoClub');}); //PANTALLA DE BIENVENIDA EN PANTALLA DE INICIO
app.use(router);

db.then(()=>{
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgBlue.white)); //ARRANCO SERVIDOR
    })
    .catch((err)=> console.log(err.message));   