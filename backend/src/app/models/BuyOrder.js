import Sequelize, { Model } from 'sequelize';

class BuyOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        confirmed: Sequelize.BOOLEAN,
        canceled_at: Sequelize.DATE,
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
    this.belongsToMany(models.Service, {
      through: 'services_buyorders',
      foreignKey: 'order_id',
      as: 'services',
    });
  }
}

export default BuyOrder;
