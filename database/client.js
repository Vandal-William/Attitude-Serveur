
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  dialect: process.env.DB_DRIVER,
  define: {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = sequelize;