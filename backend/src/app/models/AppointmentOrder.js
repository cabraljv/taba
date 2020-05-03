import Sequelize, { Model } from 'sequelize';

class AppointmentOrder extends Model {
  static init(sequelize) {
    super.init(
      {
        confirmed: Sequelize.BOOLEAN,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      },
      {
        sequelize,
        tableName: 'appointment_orders',
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
    this.belongsTo(models.Schedule, {
      foreignKey: 'schedule_id',
      as: 'schedule',
    });
  }
}

export default AppointmentOrder;
