import Sequelize, { Model } from 'sequelize';

class ServiceBuyOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        service_id: Sequelize.INTEGER,
        order_id: Sequelize.INTEGER,
      },
      {
        sequelize,
        tableName: 'buy_orders',
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.BuyOrder, {
      foreignKey: 'order_id',
      as: 'order',
    });
    this.belongsTo(models.BuyOrder, {
      foreignKey: 'service_id',
      as: 'service',
    });
  }
}

export default ServiceBuyOrder;
