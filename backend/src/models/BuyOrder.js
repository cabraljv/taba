import Sequelize, { Model } from 'sequelize';

class BuyOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        confirmed: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'buy_orders',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
    });
    this.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'service',
    });
  }
}

export default BuyOrder;
