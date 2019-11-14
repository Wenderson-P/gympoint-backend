import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../app/models/Student';
import User from '../app/models/User';
import Plan from '../app/models/Plan';

const models = [Student, User, Plan];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
