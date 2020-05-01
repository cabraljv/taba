module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regions', {
      id: {
        type: Sequelize.INTEGER,
        alloNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      min_latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      max_latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      min_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      max_longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('regions');
  },
};
