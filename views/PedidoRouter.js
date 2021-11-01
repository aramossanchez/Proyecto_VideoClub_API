const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const PedidoController = require('../controllers/PedidoController');

router.get('/', PedidoController.getAll);
router.post('/', PedidoController.create);
router.delete('/:id', PedidoController.delete);


module.exports = router;