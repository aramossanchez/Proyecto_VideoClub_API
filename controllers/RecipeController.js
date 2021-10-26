//IMPORTAMOS BASE DE DATOS
const db = require("../models");
const recipes = db.recipe;
const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE

const RecipeController = {}; //CREAMOS EL OBJETO CONTROLADOR



//CRUD
RecipeController.getAll = (req, res) => {
  
    recipes.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las recetas."
        });
      });
  };

//-------------------------------------------------------------------------------------

RecipeController.getById = (req, res) => {
    const id = req.params.id;
  
    recipes.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No existe la receta con el id ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar acceder a la receta con el id " + id + "."
        });
      });
  };

//-------------------------------------------------------------------------------------

RecipeController.create = (req, res) => {

    if (!req.body.nombre) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
      return;
    }

    const newRecipe = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    };

    recipes.create(newRecipe)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar añadir una nueva receta."
        });
      });
  };

//-------------------------------------------------------------------------------------

RecipeController.update = (req, res) => {
    const id = req.params.id;
  
    recipes.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `La receta con id ${id} ha sido actualizado correctamente.`
          });
        } else {
          res.send({
            message: `No se pudo actualizar la receta ${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar actualizar la receta " + id + "."
        });
      });
  };

//-------------------------------------------------------------------------------------

RecipeController.delete = (req, res) => {
    const id = req.params.id;
  
    recipes.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡La receta ha sido eliminada correctamente!"
          });
        } else {
          res.send({
            message: `No se ha podido eliminar el registro con el id ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar borrar la receta " + id + "."
        });
      });
  };

module.exports = RecipeController;