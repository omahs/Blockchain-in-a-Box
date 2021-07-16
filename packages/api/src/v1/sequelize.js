import Sequelize from 'sequelize';
import UserModel from './models/user';
import UserModel from './models/user';
import UserModel from './models/user';

// TODO: Insert these values dynamically

const sequelize = new Sequelize('users', 'test', 'test1234', {
  host: 'db',
  dialect: 'mysql',
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  // eslint-disable-next-line no-console
  console.log('Users db and user table have been created');
});

module.exports = User;