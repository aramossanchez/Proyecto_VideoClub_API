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

    if (req.user.usuario.rol == "administrador") {//COMPROBAMOS SI ESTÁ LOGADO COMO ADMINISTRADOR

          let clave = req.body.clave;

          if (clave.length >= 8) {//SE ENCRIPTA LA CONTRASEÑA SI MÍNIMO TIENE 8 CARACTERES
            var password = bcrypt.hashSync(req.body.clave, Number.parseInt(authConfig.rounds));   

            usuario.create({
                nombre: req.body.nombre,
                correo: req.body.correo,
                clave: password,
                ciudad: req.body.ciudad,
                rol: req.body.rol
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
          }else{
            res.send({
              message: `La contraseña tiene que tener un mínimo de 8 caracteres. ${clave}`
          });
          }
    }else{
      res.send({
        message: `No tienes permisos para registrar usuarios. Contacta con un administrador.`
      });
    }

    

};

//-------------------------------------------------------------------------------------

//OBTENEMOS LISTADO DE TODAS LOS USUARIOS



UsuarioController.getAll = (req, res) => {
  
    if (req.user.usuario.rol == "administrador") {//COMPROBAMOS SI ESTÁ LOGADO COMO ADMINISTRADOR

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
    }else{
      res.send({
        message: `No tienes permisos para visualizar a todos los usuarios. Contacta con un administrador.`
      });
    }
  };

//-------------------------------------------------------------------------------------

//OBTENEMOS UN UNICO USUARIO, BUSCANDO POR ID
UsuarioController.getById = (req, res) => {

    const id = req.params.id;

    if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA VERLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

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
    }else{
      res.send({
        message: `No tienes permisos para acceder al perfil indicado.`
      });
    }
};

//-------------------------------------------------------------------------------------

UsuarioController.update = (req, res) => {

        const id = req.params.id;

        if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA ACTULIZARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

              
            
              usuario.update(req.body, {
                where: { id: id }
              })
                .then(num => {
                  if (num == 1) {
                    res.send({
                      message: "El usuario ha sido actualizado correctamente."
                    });
                  } else {
                    res.send({
                      message: `No se ha podido actualizar el usuario con el id ${id}`
                    });
                  }
                })
                .catch(err => {
                  res.status(500).send({
                    message: "Ha surgido algún error al intentar actualizar el usuario con el id " + id + "."
                  });
                });
        }else{
          res.send({
            message: `No tienes permisos para modificar el perfil indicado.`
          });
        }
};

//BORRAMOS A USUARIO, BUSCANDO POR ID
UsuarioController.delete = (req, res) => {

    const id = req.params.id;

    if (req.user.usuario.rol == "administrador" || req.user.usuario.id == id) {// HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR O EL USUARIO DUEÑO DEL PERFIL

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
    }else{
      res.send({
        message: `No tienes permisos para borrar el perfil indicado.`
      });
    }
};

//-------------------------------------------------------------------------------------

//BORRAMOS TODOS LOS USUARIOS
UsuarioController.deleteAll = (req, res) => {

  if (req.user.usuario.rol == "administrador") {// HACEMOS QUE SOLO PUEDA BORRARLO EL ADMINISTRADOR

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
  }else{
    res.send({
      message: `No tienes permisos para borrar usuarios. Contacta con un administrador.`
    });
  }
};

module.exports = UsuarioController;

