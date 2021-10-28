const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/PedidoController');

router.get('/', PedidoController.getAll);
router.post('/', PedidoController.create);


module.exports = router;