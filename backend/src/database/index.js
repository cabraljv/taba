import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Branch from '../app/models/Branch';
import Category from '../app/models/Category';
import File from '../app/models/File';
import Offer from '../app/models/Offer';
import Service from '../app/models/Service';
import BuyOrder from '../app/models/BuyOrder';
import Region from '../app/models/Region';
import Establishment from '../app/models/Establishment';

const models = [
  File,
  Branch,
  Category,
  Region,
  Establishment,
  Offer,
  User,
  Service,
  BuyOrder,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
