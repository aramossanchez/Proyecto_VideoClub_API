'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingredient extends Model {
    static associate(models) {
      this.hasMany(models.contain, {
        foreignKey: 'ingredientId'
      });
    }
  };
  ingredient.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'ingredient',
  });
  return ingredient;
};