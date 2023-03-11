const{ Sequelize } = require("sequelize");

const sequelize = new Sequelize('proyectoaunar1', 'root','', {
    host: 'localhost',
    dialect: "mysql"
  });

  module.exports = sequelize
  