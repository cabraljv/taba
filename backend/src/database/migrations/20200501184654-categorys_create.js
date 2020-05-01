module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorys', {
      id: {
        type: Sequelize.INTEGER,
        alloNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    return queryInterface.dropTable('categorys');
  },
};
