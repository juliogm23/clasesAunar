const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const matricula = sequelize.define('matricula', {
 
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_matricula: {
    type: DataTypes.STRING
  },
 
}, {

});
