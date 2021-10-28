const { usuario } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const UsuarioController = {};


//GESTIONAMOS LOGIN DE USUARIOS
UsuarioController.signIn = (req, res) => {

    let correo = req.body.correo;
    let clave = req.body.clave;

    usuario.findOne({
        where: { correo: correo }
    }).then(usuario => {
        if (!usuario) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(clave, usuario.clave)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR
                let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    usuario: usuario,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Contraseña incorrecta" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
};

//-------------------------------------------------------------------------------------

//GESTIONAMOS REGISTRO DE USUARIOS
UsuarioController.signUp = (req, res) => { 

    let password = bcrypt.hashSync(req.body.clave, Number.parseInt(authConfig.rounds)); //SE ENCRIPTA LA CONTRASEÑA

    usuario.create({
        nombre: req.body.nombre,
        correo: req.body.correo,
        clave: password
    }).then(usuario => {
        let token = jwt.sign({ usuario: usuario }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        res.json({
            usuario: usuario,
            token: token
        });
    }).catch(err => {
        res.status(500).json(err);
    });

};

//-------------------------------------------------------------------------------------

//OBTENEMOS LISTADO DE TODAS LOS USUARIOS
UsuarioController.getAll = (req, res) => {
  
    usuario.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar acceder a los usuarios."
        });
      });
  };

//-------------------------------------------------------------------------------------

//OBTENEMOS UN UNICO USUARIO, BUSCANDO POR ID
UsuarioController.getById = (req, res) => {
    const id = req.params.id;

    usuario.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar el usuario con el id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar acceder al usuario con el id " + id
            });
        });
};

//-------------------------------------------------------------------------------------

//BORRAMOS A USUARIO, BUSCANDO POR ID
UsuarioController.delete = (req, res) => {

    const id = req.params.id;

    usuario.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: `El usuario con id ${id} ha sido eliminado correctamente.`
                });
            } else {
                res.send({
                    message: `No se ha podido eliminar el usuario con id ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha surgido algún error al intentar borrar el usuario con el id " + id
            });
        });
};

//-------------------------------------------------------------------------------------

//BORRAMOS TODOS LOS USUARIOS
UsuarioController.deleteAll = (req, res) => {
    usuario.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `Se han borrado ${nums} usuarios de la base de datos` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha surgido algún error al intentar eliminar a los usuarios."
        });
      });
  };

module.exports = UsuarioController;

