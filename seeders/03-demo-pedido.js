'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', 
    [
      {"peliculaId":5,"usuarioId":45,"fecha_alquiler":"2021-10-09","fecha_devolucion":"2021-10-20","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
      {"peliculaId":25,"usuarioId":25,"fecha_alquiler":"2021-10-15","fecha_devolucion":"2021-10-26","createdAt":"2021-10-28","updatedAt":"2021-10-28"}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pedidos', null, {});

  }
};
