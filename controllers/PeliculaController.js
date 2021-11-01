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

//OBTENEMOS PELICULA POR TITULO
PeliculaController.getByTitulo = (req, res) => {

  let titulo = req.params.titulo;
  
  peliculas.findAll( {where: {titulo: titulo}})
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

//OBTENEMOS PELICULA POR ACTOR PRINCIPAL
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

//CREAMOS PELÍCULA NUEVA
PeliculaController.create = (req, res) => {
    
  if (!req.body.titulo) {
    res.status(400).send({
      message: "El contenido no puede estar vacío"
    });
    return;
  }
  
  const nuevaPelicula = {
    titulo: req.body.titulo,
    genero: req.body.genero,
    actor_principal: req.body.actor_principal,
    ciudad: req.body.ciudad,
    alquilada: req.body.alquilada
  };
  
  peliculas.create(nuevaPelicula)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido algún error al intentar crear la película."
      });
    });
};

//-------------------------------------------------------------------------------------

//ACTUALIZAMOS PELICULA EXISTENTE
PeliculaController.update = (req, res) => {
  const id = req.params.id;

  peliculas.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "La película ha sido actualizada correctamente."
        });
      } else {
        res.send({
          message: `No se ha podido actualizar la película con el id ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ha surgido algún error al intentar actualizar la película con el id " + id + "."
      });
    });
};

//-------------------------------------------------------------------------------------

//BORRAMOS PELICULA, BUSCANDO POR ID
PeliculaController.delete = (req, res) => {

  const id = req.params.id;

  peliculas.destroy({
      where: { id: id }
  })
      .then(num => {
          if (num == 1) {
              res.send({
                  message: `La película con id ${id} ha sido eliminada correctamente.`
              });
          } else {
              res.send({
                  message: `No se ha podido eliminar la película con id ${id}.`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Ha surgido algún error al intentar borrar la película con el id " + id
          });
      });
};

//-------------------------------------------------------------------------------------

module.exports = PeliculaController;