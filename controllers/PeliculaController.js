//IMPORTAMOS BASE DE DATOS
const db = require("../models");
const peliculas = db.pelicula;
const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE

const PeliculaController = {}; //CREAMOS EL OBJETO CONTROLADOR



//CRUD
PeliculaController.getAll = (req, res) => {
  
    peliculas.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a los ingredientes."
        });
      });
  };

//-------------------------------------------------------------------------------------

module.exports = PeliculaController;