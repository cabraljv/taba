import Sequelize, { Model } from 'sequelize';

class Offer extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        discount: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'service',
    });
  }
}

export default Offer;
