'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pedidos', [
    {"peliculaId":261,"usuarioId":6,"fecha_alquiler":"2021-10-13","fecha_devolucion":"2021-10-27","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":202,"usuarioId":40,"fecha_alquiler":"2021-10-15","fecha_devolucion":"2021-10-24","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":197,"usuarioId":43,"fecha_alquiler":"2021-10-10","fecha_devolucion":"2021-10-27","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":200,"usuarioId":44,"fecha_alquiler":"2021-10-13","fecha_devolucion":"2021-10-21","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":109,"usuarioId":25,"fecha_alquiler":"2021-10-13","fecha_devolucion":"2021-10-26","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":44,"usuarioId":33,"fecha_alquiler":"2021-10-10","fecha_devolucion":"2021-10-27","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":143,"usuarioId":47,"fecha_alquiler":"2021-10-13","fecha_devolucion":"2021-10-21","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":124,"usuarioId":44,"fecha_alquiler":"2021-10-14","fecha_devolucion":"2021-10-20","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":186,"usuarioId":17,"fecha_alquiler":"2021-10-13","fecha_devolucion":"2021-10-23","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":95,"usuarioId":7,"fecha_alquiler":"2021-10-10","fecha_devolucion":"2021-10-26","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":52,"usuarioId":16,"fecha_alquiler":"2021-10-10","fecha_devolucion":"2021-10-25","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":6,"usuarioId":41,"fecha_alquiler":"2021-10-14","fecha_devolucion":"2021-10-25","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":282,"usuarioId":40,"fecha_alquiler":"2021-10-15","fecha_devolucion":"2021-10-24","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":39,"usuarioId":20,"fecha_alquiler":"2021-10-12","fecha_devolucion":"2021-10-23","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":96,"usuarioId":15,"fecha_alquiler":"2021-10-12","fecha_devolucion":"2021-10-20","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":224,"usuarioId":22,"fecha_alquiler":"2021-10-16","fecha_devolucion":"2021-10-21","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":286,"usuarioId":17,"fecha_alquiler":"2021-10-17","fecha_devolucion":"2021-10-25","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":222,"usuarioId":5,"fecha_alquiler":"2021-10-17","fecha_devolucion":"2021-10-21","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":131,"usuarioId":7,"fecha_alquiler":"2021-10-10","fecha_devolucion":"2021-10-24","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":12,"usuarioId":41,"fecha_alquiler":"2021-10-08","fecha_devolucion":"2021-10-20","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":80,"usuarioId":11,"fecha_alquiler":"2021-10-11","fecha_devolucion":"2021-10-24","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":238,"usuarioId":20,"fecha_alquiler":"2021-10-17","fecha_devolucion":"2021-10-23","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":216,"usuarioId":8,"fecha_alquiler":"2021-10-15","fecha_devolucion":"2021-10-27","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":160,"usuarioId":16,"fecha_alquiler":"2021-10-14","fecha_devolucion":"2021-10-23","createdAt":"2021-10-28","updatedAt":"2021-10-28"},
    {"peliculaId":132,"usuarioId":13,"fecha_alquiler":"2021-10-17","fecha_devolucion":"2021-10-25","createdAt":"2021-10-28","updatedAt":"2021-10-28"}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('pedidos', null, {});

  }
};
