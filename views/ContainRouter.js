const express = require('express');
const router = express.Router();

//Importo modelo de datos
const ContainController = require('../controllers/ContainController');

// End-points CRUD movies
router.get('/', ContainController.getAll);
router.get('/ingredient/:id', ContainController.getIngredientsById);
router.get('/recipe/:id', ContainController.getRecipesById);
router.post('/', ContainController.create);
router.put('/:id', ContainController.update);
router.delete('/:id', ContainController.delete);

module.exports = router;