'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', 
    [], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pedidos', null, {});

  }
};
