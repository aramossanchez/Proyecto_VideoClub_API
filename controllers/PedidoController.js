const { pedido } = require('../models/index');

const PedidoController = {};


//OBTENEMOS LISTADO DE TODAS LOS PEDIDOS
PedidoController.getAll = (req, res) => {
  
    pedido.findAll()
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

module.exports = PedidoController;