// Option 3: Passing parameters separately (other dialects)
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("admin_universidad", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
