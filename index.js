const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const logger = require('./config/winston');
const db = require('./db.js');
const router = require('./router.js');
const cors = require("cors");
//IMPORTAMOS SWAGGER, PARA DOCUMENTAR API EN LA PLATAFORMA DE DESPLIEGUE
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 3000; //CONFIGURO PUERTO HEROKU

var corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};

//CONFIGURO SWAGGER DOC
const swaggerDoc = swaggerJSDoc({
    swaggerDefinition:{
        info:{
            title: "Proyecto VideoClub API",
            version: "1.0.0",
            description: "Documentación de la API"
        }
    },
    apis: ["index.js"]
})


//Middleware --> FUNCIONES QUE SE EJECUTARÁN SIEMPRE ANTES DE CUALQUIER ACCIÓN QUE HAGAMOS DE APP
app.use(morgan('combined', { stream: logger.stream }));//GENERO LOGS
app.use(express.json()); //PUEDO OBTENER JSON DEL BODY
app.use(cors(corsOptions));  //USO CORS
app.use('/', swaggerUI.serve,swaggerUI.setup(swaggerDoc))//EN LA URL /documentacion PODEMOS VER LA DOCUMENTACION CREADA CON SWAGGER

/**
* @swagger
* /peliculas:
*   get:
*       responses:
*           200:
*               description:
*                   Ver todas las películas
*/

//RUTAS
app.use(router);

db.then(()=>{
        app.listen(PORT, ()=> console.log(`Server on port ${PORT}`.bgBlue.white)); //ARRANCO SERVIDOR
    })
    .catch((err)=> console.log(err.message));   