import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Student from '../app/models/Student';
import Admin from '../app/models/Admin';

const models = [Student, Admin];

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
