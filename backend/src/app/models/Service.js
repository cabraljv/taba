import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.DOUBLE,
        points: Sequelize.VIRTUAL,
        minutes: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    this.points = this.value * 0.1;
    return this;
  }

  static associate(models) {
    this.hasOne(models.Offer, {
      foreignKey: 'service_id',
      as: 'offer',
    });
    this.belongsTo(models.Establishment, {
      foreignKey: 'establishment_id',
      as: 'establishment',
    });
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
    this.belongsTo(models.Region, { foreignKey: 'pic_id', as: 'picture' });
  }
}

export default Service;
