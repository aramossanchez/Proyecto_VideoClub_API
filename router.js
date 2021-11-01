const router = require('express').Router();

const auth = require('./middlewares/auth');

const UsuarioRouter = require('./views/UsuarioRouter');
const PeliculaRouter = require('./views/PeliculaRouter');
const PedidoRouter = require('./views/PedidoRouter');

router.use('/usuarios', UsuarioRouter); 
router.use('/peliculas', PeliculaRouter); 
router.use('/pedidos', PedidoRouter); 

module.exports = router;