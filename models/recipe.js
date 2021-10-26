'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    static associate(models) {
      this.hasMany(models.contain, {
        foreignKey: 'recipeId'
      });
    }
  };
  recipe.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'recipe',
  });
  return recipe;
};