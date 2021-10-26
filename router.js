const router = require('express').Router();

const auth = require('./middlewares/auth');

// const UsuarioRouter = require('./views/UsuarioRouter');
const PeliculaRouter = require('./views/PeliculaRouter');
// const PedidoRouter = require('./views/PedidoRouter');

// router.use('/usuarios', UsuarioRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS
router.use('/peliculas', PeliculaRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS
// router.use('/pedidos', PedidoRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS

module.exports = router;