const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UsuarioController');


router.get('/', UserController.getAll)
router.post('/login', UserController.signIn);
router.post('/registro', UserController.signUp);


module.exports = router;