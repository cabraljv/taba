module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Corte de cabelo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Manicure',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Lavagem de cabelo',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
