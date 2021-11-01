const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js');

const UsuarioController = require('../controllers/UsuarioController');


router.post('/login', UsuarioController.signIn);
router.post('/registro', auth, UsuarioController.signUp);
router.get('/', auth, UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
// router.put('/:id', UsuarioController.update);
router.delete('/', auth, UsuarioController.deleteAll);
router.delete('/:id', auth, UsuarioController.delete);


module.exports = router;