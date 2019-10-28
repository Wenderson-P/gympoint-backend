const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert('admin', [
      {
        name: 'Admnistrator',
        email: 'admin@gympoint.com.br',
        password_hash: bcrypt.hashSync('admin', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
