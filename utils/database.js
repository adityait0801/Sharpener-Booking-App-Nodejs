const Sequelize = require("sequelize");

// Initialize Sequelize with your database configuration
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
