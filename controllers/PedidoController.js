const { pedido } = require('../models/index');

var peliculaModel  = require('../models').pelicula; //TRAIGO MODELO DE PELICULA, PARA MOSTRAR DATOS DE LAS PELICULAS

var usuarioModel  = require('../models').usuario; //TRAIGO MODELO DE USUARIO, PARA MOSTRAR DATOS DE LAS USUARIOS

const PedidoController = {};


//OBTENEMOS LISTADO DE TODAS LOS PEDIDOS
PedidoController.getAll = (req, res) => {
  
    pedido.findAll({include: [{ model:peliculaModel}, {model:usuarioModel}]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a los pedidos."
        });
      });
  };

//-------------------------------------------------------------------------------------

//CREATE a new movie in database
PedidoController.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío."
    });
    return;
  }
  const nuevoPedido = {
    peliculaId: req.body.peliculaId,
    usuarioId: req.body.usuarioId,
    fecha_alquiler: req.body.fecha_alquiler,
    fecha_devolucion: req.body.fecha_devolucion
  };
  pedido.create(nuevoPedido)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ha surgido algún error al intentar crear un pedido."
      });
    });
};

//-------------------------------------------------------------------------------------


module.exports = PedidoController;