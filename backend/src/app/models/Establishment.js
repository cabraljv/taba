import Sequelize, { Model } from 'sequelize';

class Establishment extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        latitude: Sequelize.DOUBLE,
        longitude: Sequelize.DOUBLE,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'logo_id', as: 'logo' });
    this.hasMany(models.Service, {
      foreignKey: 'establishment_id',
      as: 'services',
    });
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' });
    this.belongsTo(models.Region, { foreignKey: 'region_id', as: 'region' });
    this.belongsTo(models.Branch, { foreignKey: 'branch_id', as: 'branch' });
  }
}

export default Establishment;
