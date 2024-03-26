import { DataTypes, Model } from 'sequelize';
import db from '.';
import { TodoList } from '../../interfaces/todo/TodoInterface';
import SequelizeUser from './SequelizeUser';

interface SequelizeTodoCreationAttributes extends Omit<TodoList, 'id'> { }

class SequelizeTodo extends Model<TodoList, SequelizeTodoCreationAttributes> {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: string;
    public user_id!: number;
    public created_at!: Date;
}

SequelizeTodo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
    },
}, {
    sequelize: db,
    tableName: 'todo',
    timestamps: false,
    underscored: true,
});

SequelizeTodo.belongsTo(SequelizeUser, { foreignKey: 'user_id', as: 'user' });
SequelizeUser.hasMany(SequelizeTodo, { foreignKey: 'user_id', as: 'todos' });

export default SequelizeTodo;

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });