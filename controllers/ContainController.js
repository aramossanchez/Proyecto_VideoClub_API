//IMPORTAMOS BASE DE DATOS
const db = require("../models");
const contains = db.contain;
const Op = db.Sequelize.Op; //IMPORTAMOS FUNCIONES ORM DE SEQUELIZE


var ingredientModel  = require('../models').ingredient;  //IMPORTAMOS MODELO DE INGREDIENTES
var recipeModel  = require('../models').recipe;  //IMPORTAMOS MODELO DE RECETAS

const ContainController = {}; //CREAMOS EL OBJETO CONTROLADOR



//CRUD
ContainController.getAll = (req, res) => {
  
    contains.findAll({include: [{ model:ingredientModel}, {model:recipeModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a las recetas e ingredientes."
        });
      });
};

//-------------------------------------------------------------------------------------

ContainController.getIngredientsById = (req, res) => {

    contains.findAll(
        { where: { ingredientId: req.params.id },
        include: [{ model:ingredientModel}, {model: recipeModel}] },
        )
            .then(data => {
                res.send(data);
                })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Ha surgido algún error al intentar acceder a las recetas e ingredientes."
                });
            });
};

//-------------------------------------------------------------------------------------

ContainController.getRecipesById = (req, res) => {

    contains.findAll(
        { where: { recipeId: req.params.id },
        include: [{ model:ingredientModel}, {model: recipeModel}] },
        )
            .then(data => {
                res.send(data);
                })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || "Ha surgido algún error al intentar acceder a las recetas e ingredientes."
                });
            });
};

//-------------------------------------------------------------------------------------

ContainController.create = (req, res) => {

    if (!req.body.cantidad || !req.body.ingredientId || !req.body.recipeId) {
      res.status(400).send({
        message: "¡El contenido no puede estar vacío!"
      });
      return;
    }

    const newContain = {
        cantidad: req.body.cantidad,
        ingredientId: req.body.ingredientId,
        recipeId: req.body.recipeId
    };

    contains.create(newContain)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar añadir una nueva receta e ingrediente."
        });
      });
  };

//-------------------------------------------------------------------------------------

ContainController.update = (req, res) => {
    const id = req.params.id;
  
    contains.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `La receta e ingredientes con id ${id} ha sido actualizado correctamente.`
          });
        } else {
          res.send({
            message: `No se pudo actualizar la receta e ingredientes ${id}`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar actualizar la receta e ingredientes " + id + "."
        });
      });
  };

// //-------------------------------------------------------------------------------------

ContainController.delete = (req, res) => {
    const id = req.params.id;
  
    contains.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "¡La receta e ingredientes ha sido eliminada correctamente!"
          });
        } else {
          res.send({
            message: `No se ha podido eliminar el registro con el id ${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Ha surgido algún error al intentar borrar la receta e ingredientes" + id + "."
        });
      });
};

module.exports = ContainController;