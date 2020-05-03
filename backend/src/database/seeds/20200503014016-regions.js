module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'regions',
      [
        {
          name: 'Regiao teste',
          min_latitude: -25.482951,
          min_longitude: -65.016527,
          max_latitude: 1.054628,
          max_longitude: -31.243992,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('regions', null, {});
  },
};
