'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    static associate(models) {
      this.hasMany(models.pedido, {
        foreignKey: 'peliculaId'
      });
    }
  };
  pelicula.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    caratula: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen_promocional: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actor_principal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alquilada: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'pelicula',
  });
  return pelicula;
};