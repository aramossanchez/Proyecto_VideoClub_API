const router = require('express').Router();

const auth = require('./middlewares/auth');

//Importamos Routes definidas en views
const IngredientRouter = require('./views/IngredientRouter');
const RecipeRouter = require('./views/RecipeRouter');
const ContainRouter = require('./views/ContainRouter');
const UserRouter = require('./views/UserRouter.js');

//Rutas
router.use('/access', UserRouter); //RUTA PARA LOGIN Y REGISTRO DE USUARIOS
router.use('/ingredients', auth, IngredientRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS
router.use('/recipes', auth, RecipeRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS
router.use('/contains', auth, ContainRouter); //PASAMOS POR AUTENTICACION ANTES DE ACCEDER A CUALQUIERA DE ESTAS RUTAS

module.exports = router;