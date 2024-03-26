
import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'admin',
          email: 'admin@admin.com',
          role: 'admin',
          password: '123456',
        },
        {
          username: 'user1',
          email: 'user1@example.com',
          role: 'user',
          password: 'password1',
        },
      ], 
      {})
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
}
