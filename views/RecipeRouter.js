const express = require('express');
const router = express.Router();

//Importo modelo de datos
const RecipeController = require('../controllers/RecipeController');

// End-points CRUD movies
router.get('/', RecipeController.getAll);
router.get('/:id', RecipeController.getById);
router.post('/', RecipeController.create);
router.put('/:id', RecipeController.update);
router.delete('/:id', RecipeController.delete);

module.exports = router;