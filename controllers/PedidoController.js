const { pedido } = require('../models/index');
const { pelicula } = require('../models/index');
const { usuario } = require('../models/index');

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

//CREAMOS UN PEDIDO NUEVO
//SE COMPROBARÁ QUE LA PELÍCULA Y EL USUARIO ESTÁN EN LA MISMA CIUDAD. DESPUÉS SE COMPROBARÁ SI LA PELÍCULA ESTÁ ALQUILADA O NO
PedidoController.create = (req, res) => {

  //COMPROBAMOS SI HAY ALGO EN EL BODY
  if (!req.body) {
    res.status(400).send({
      message: "El contenido no puede estar vacío."
    });
    return;
  }

  //COMPROBAMOS SI LA PELÍCULA ESTÁ EN LA MISMA CIUDAD DEL USUARIO

  //BUSCAMOS CIUDAD DE PELÍCULA
  var ciudadUsuarioBuscado = "a";

  usuario.findByPk(req.body.usuarioId)
    .then(data => {
      if (data) {
        ciudadUsuarioBuscado = data.ciudad;
        usuarioBuscado = data;
      } else {
        res.status(404).send({
          message: `No se puede encontrar la película con el id ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ha surgido algún error al intentar acceder a la Usuario con el id " + id
      });
    });

//BUSCAMOS CIUDAD DE USUARIO
  var peliculaBuscada = "q";
  var ciudadPeliculaBuscada = "b";
  pelicula.findByPk(req.body.peliculaId)
    .then(data => {
      
      //COMPROBAMOS SI LAS 2 CIUDADES SON IGUALES Y SI LA PELÍCULA ESTÁ YA ALQUILADA
      if (data) {
        peliculaBuscada = data;
        ciudadPeliculaBuscada = data.ciudad;
      }
      if (ciudadPeliculaBuscada == ciudadUsuarioBuscado && data.alquilada == false) {
          const nuevoPedido = {
            peliculaId: req.body.peliculaId,
            usuarioId: req.body.usuarioId,
            fecha_alquiler: req.body.fecha_alquiler,
            fecha_devolucion: req.body.fecha_devolucion
          };
          pedido.create(nuevoPedido)
            .then(data => {
              res.send(data);
              peliculaBuscada.alquilada = true;
              console.log(peliculaBuscada.alquilada);
              pelicula.update( {alquilada: true},{ where: { id: peliculaBuscada.id }})
                .then(num => {
                  if (num == 1) {
                    // res.send({
                    //   message: "Movie was updated successfully."
                    // });
                  } else {
                    // res.send({
                    //   message: `Cannot update Movie with id. Maybe Movie was not found or req.body is empty!`
                    // });
                  }
                })
                .catch(err => {
                  res.status(500).send({
                    message: "Ha surgido algún error al intentar crear el pedido."
                  });
                });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Ha surgido algún error al intentar crear un pedido."
              });
            });
      } else {
        if (ciudadPeliculaBuscada != ciudadUsuarioBuscado) {
          res.status(404).send({
            message: `El usuario y la película no se encuentran en la misma ciudad.`
          });
        }else{
          res.status(404).send({
            message: `La película ya está alquilada.`
          });
        }
        
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ha surgido algún error al intentar acceder al usuario con el id " + req.body.usuarioId
      });
    });
};

//-------------------------------------------------------------------------------------

//BORRAMOS UN PEDIDO
PedidoController.delete = (req, res) => {

  const id = req.params.id;

  pedido.destroy({ where: { id: id }})
      .then(num => {
          if (num == 1) {
              res.send({
                  message: `El pedido con id ${id} ha sido eliminada correctamente.`
              });
          } else {
              res.send({
                  message: `No se ha podido eliminar el pedido con id ${id}.`
              });
          }
      })
      .catch(err => {
          res.status(500).send({
              message: "Ha surgido algún error al intentar borrar el pedido con el id " + id
          });
      });
};

module.exports = PedidoController;