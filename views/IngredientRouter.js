const express = require('express');
const router = express.Router();

//Importo modelo de datos
const IngredientController = require('../controllers/IngredientController');

// End-points CRUD movies
router.get('/', IngredientController.getAll);
router.get('/:id', IngredientController.getById);
router.post('/', IngredientController.create);
router.put('/:id', IngredientController.update);
router.delete('/:id', IngredientController.delete);

module.exports = router;