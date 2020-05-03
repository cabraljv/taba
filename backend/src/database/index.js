import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Branch from '../app/models/Branch';
import Category from '../app/models/Category';
import File from '../app/models/File';
import Offer from '../app/models/Offer';
import Service from '../app/models/Service';
import Region from '../app/models/Region';
import Establishment from '../app/models/Establishment';
import Schedule from '../app/models/Schedule';
import AppointmentOrder from '../app/models/AppointmentOrder';

const models = [
  File,
  Branch,
  Category,
  Region,
  Establishment,
  Offer,
  User,
  Service,
  Schedule,
  AppointmentOrder,
];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();
