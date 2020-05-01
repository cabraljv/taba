import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User';
import Branch from '../models/Branch';
import Category from '../models/Category';
import File from '../models/File';
import Offer from '../models/Offer';
import Service from '../models/Service';
import BuyOrder from '../models/BuyOrder';
import Region from '../models/Region';
import Establishment from '../models/Establishment';

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
