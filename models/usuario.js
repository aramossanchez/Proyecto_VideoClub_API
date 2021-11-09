'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.pedido, {
        foreignKey: 'usuarioId'
      });
    }
  };
  usuario.init({
    correo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clave: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};