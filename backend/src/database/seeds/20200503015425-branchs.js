module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'branchs',
      [
        {
          name: 'Beleza',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('branchs', null, {});
  },
};
