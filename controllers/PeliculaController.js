//IMPORTAMOS BASE DE DATOS
const db = require("../models");
const peliculas = db.pelicula;
const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE

const PeliculaController = {}; //CREAMOS EL OBJETO CONTROLADOR



//OBTENEMOS LISTADO DE TODAS LAS PELÍCULAS
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

//OBTENEMOS PELICULA POR ID
PeliculaController.getById = (req, res) => {
  const id = req.params.id;

  peliculas.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No existe la película con el id ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ha surgido algún error al intentar acceder a la película con el id " + id + "."
      });
    });
};

//-------------------------------------------------------------------------------------

//OBTENEMOS PELICULA POR CIUDAD
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

//OBTENEMOS PELICULA POR CIUDAD Y POR DISPONIBILIDAD PARA SER ALQUILADA
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

//OBTENEMOS PELICULA POR GENERO
PeliculaController.getByGenre = (req, res) => {

  let genre = req.params.genero;
  
  peliculas.findAll( {where: {genero: genre}})
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

//OBTENEMOS PELICULA POR GENERO
PeliculaController.getByMainCharacter = (req, res) => {

  let actor = req.params.actor_principal;
  
  peliculas.findAll( {where: {actor_principal: actor}})
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