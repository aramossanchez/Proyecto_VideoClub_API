const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const UsuarioController = require('../controllers/UsuarioController');


router.post('/login', UsuarioController.signIn);
router.post('/registro', UsuarioController.signUp);
router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.put('/:id', UsuarioController.update);
router.delete('/', UsuarioController.deleteAll);
router.delete('/:id', UsuarioController.delete);


module.exports = router;