const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/UsuarioController');


router.post('/login', UsuarioController.signIn);
router.post('/registro', UsuarioController.signUp);
router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.delete('/', UsuarioController.deleteAll);
router.delete('/:id', UsuarioController.delete);


module.exports = router;