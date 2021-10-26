'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelicula extends Model {
    static associate(models) {
      // define association here
    }
  };
  pelicula.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actores: {
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