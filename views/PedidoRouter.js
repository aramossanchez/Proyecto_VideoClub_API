const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const PedidoController = require('../controllers/PedidoController');

router.get('/', auth, PedidoController.getAll);
router.get('/:id', auth, PedidoController.getById);
router.post('/', auth, PedidoController.create);
router.delete('/:id/pelicula/:peliculaId', auth, PedidoController.delete);


module.exports = router;