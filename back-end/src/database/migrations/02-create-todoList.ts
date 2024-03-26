import { Model, QueryInterface, DataTypes } from 'sequelize';
import { TodoList } from '../../interfaces/todo/TodoInterface';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<TodoList>>('todo', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'pending',
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('todo');
  },
};