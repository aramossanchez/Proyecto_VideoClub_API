const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

//Importo modelo de datos
const PeliculaController = require('../controllers/PeliculaController');

// End-points CRUD movies
router.get('/', PeliculaController.getAll);
router.get('/:id', PeliculaController.getById);
router.get('/titulo/:titulo', PeliculaController.getByTitulo);
router.get('/ciudad/:ciudad', PeliculaController.getByCity);
router.get('/ciudad/:ciudad/alquilada/:alquilada', PeliculaController.getByCityAndRented);
router.get('/genero/:genero', PeliculaController.getByGenre);
router.get('/actor_principal/:actor_principal', PeliculaController.getByMainCharacter);
router.post('/', PeliculaController.create);
router.put('/:id', PeliculaController.update);
router.delete('/:id', auth, PeliculaController.delete);

module.exports = router;