const { user } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const AccessController = {};

AccessController.signIn = (req, res) => { //LOGIN
    let { email, password } = req.body;
    user.findOne({
        where: { email: email }
    }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "Usuario con este correo no encontrado" });
        } else {
            if (bcrypt.compareSync(password, user.password)) { //COMPARA CONTRASEÑA INTRODUCIDA CON CONTRASEÑA GUARDADA, TRAS DESENCRIPTAR
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    user: user,
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

AccessController.signUp = (req, res) => { //REGISTRO

    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); //SE ENCRIPTA LA CONTRASEÑA

    user.create({
        name: req.body.name,
        email: req.body.email,
        password: password
    }).then(user => {
        let token = jwt.sign({ user: user }, authConfig.secret, {
            expiresIn: authConfig.expires
        });
        res.json({
            user: user,
            token: token
        });
    }).catch(err => {
        res.status(500).json(err);
    });

};

module.exports = AccessController;

