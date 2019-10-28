import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Students extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async student => {
      if (student.password) {
        student.password_hash = await bcrypt.hash(student.password, 8);
      }
    });
    return this;
  }
}

export default Students;
