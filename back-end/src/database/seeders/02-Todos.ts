
import { QueryInterface } from 'sequelize';

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(
            'todo',
            [
                {
                    title: 'First todo',
                    description: 'This is the first todo',
                    status: 'pending',
                    user_id: 1,
                },
                {
                    title: 'Second todo',
                    description: 'This is the second todo',
                    status: 'completed',
                    user_id: 2,
                },
                {
                    title: 'Third todo',
                    description: 'This is the third todo',
                    status: 'completed',
                    user_id: 1,
                },
            ],
            {})
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('todo', {});
    },
}
