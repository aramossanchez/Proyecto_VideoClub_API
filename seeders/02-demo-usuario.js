'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        "nombre": "Armando",
        "correo": "ejemplo@ejemplo.com",
        "clave": "$2b$10$pW.rK5CYgi4Eom0zidGUqugZPi8CnLz59Brus/pVNW53oM3jlv6E.",
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
