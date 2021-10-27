const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');


router.post('/login', UsuarioController.signIn);
router.post('/registro', UsuarioController.signUp);
router.get('/', UsuarioController.getAll);
router.delete('/', UsuarioController.deleteAll);


module.exports = router;