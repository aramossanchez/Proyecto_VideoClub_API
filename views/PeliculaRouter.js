const express = require('express');
const router = express.Router();

//Importo modelo de datos
const PeliculaController = require('../controllers/PeliculaController');

// End-points CRUD movies
router.get('/', PeliculaController.getAll);
// router.get('/:id', PeliculaController.getById);
// router.post('/', PeliculaController.create);
// router.put('/:id', PeliculaController.update);
// router.delete('/:id', PeliculaController.delete);

module.exports = router;