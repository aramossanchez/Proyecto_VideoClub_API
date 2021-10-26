'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {
        titulo: "Matrix",
        genero: "Accion",
        actores: ["Keanu Reaves, Hugo Weaving"],
        ciudad: "Getafe",
        alquilada: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('peliculas', null, {});

  }
};
