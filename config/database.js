const { Sequelize } = require('sequelize');

// Setup connection to your database (adjust with your database credentials)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',  // or 'postgres', etc.
});

module.exports = sequelize;