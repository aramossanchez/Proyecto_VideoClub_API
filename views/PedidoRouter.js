const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const PedidoController = require('../controllers/PedidoController');

router.get('/', auth, PedidoController.getAll);
router.post('/', auth, PedidoController.create);
router.delete('/:id', auth, PedidoController.delete);


module.exports = router;