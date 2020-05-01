import Sequelize, { Model } from 'sequelize';

class Region extends Model {
  static init(sequelize) {
    super.init(
      {
        min_latitude: Sequelize.DOUBLE,
        min_longitude: Sequelize.DOUBLE,
        max_latitude: Sequelize.DOUBLE,
        max_longitude: Sequelize.DOUBLE,
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Region;
