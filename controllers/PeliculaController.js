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
            err.message || "Ha surgido algún error al intentar acceder a las películas."
        });
      });
  };

//-------------------------------------------------------------------------------------

PeliculaController.getByCity = (req, res) => {

  let ciudad = req.params.ciudad;
  
  peliculas.findAll( {where: {ciudad: ciudad}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido algún error al intentar acceder a las películas."
      });
    });
};

//-------------------------------------------------------------------------------------

PeliculaController.getByCityAndRented = (req, res) => {

  let ciudad = req.params.ciudad;
  let rented = req.params.alquilada
  
  peliculas.findAll( {where: {ciudad: ciudad, alquilada: rented}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido algún error al intentar acceder a las películas."
      });
    });
};

//-------------------------------------------------------------------------------------

module.exports = PeliculaController;