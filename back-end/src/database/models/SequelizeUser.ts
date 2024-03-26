import { DataTypes, Model } from 'sequelize';
import db from '.';
import { UserInterface } from '../../interfaces/users/UserInterface';

interface SequelizeUserCreationAttributes extends Omit<UserInterface, 'id'> {}

class SequelizeUser extends Model<UserInterface, SequelizeUserCreationAttributes> {
  public id!: number;
  public username!: string;
  public role!: string;
  public email!: string;
  public password!: string;
}

SequelizeUser.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user',
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'users',
  timestamps: false,
  underscored: true,
});

export default SequelizeUser;
