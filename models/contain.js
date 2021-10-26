'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contain extends Model {
    static associate(models) {
      this.belongsTo(models.ingredient, {
        foreignKey: 'ingredientId'
      });
      this.belongsTo(models.recipe, {
        foreignKey: 'recipeId'
      });
    }
  };
  contain.init({
    cantidad: DataTypes.STRING,
    ingredientId: DataTypes.INTEGER,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    modelName: 'contain',
  });
  return contain;
};