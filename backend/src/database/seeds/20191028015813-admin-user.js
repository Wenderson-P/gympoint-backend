module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert('users', [
      {
        name: 'Admnistrator',
        email: 'admin@gympoint.com.br',
        password_hash: '12345678',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
