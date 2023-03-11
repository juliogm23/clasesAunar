const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db_conf/database')

const estudiantes = sequelize.define('estudiantes', {
 
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING

  },
  apellido: {
    type: DataTypes.STRING

  },
  num_documento: {
    type: DataTypes.INTEGER

  },
  tip_documento: {
    type: DataTypes.STRING
  
  },
  correo: {
    type: DataTypes.STRING
  
  },
  carrera: {
    type: DataTypes.STRING

  },
}, {
  timestamps: false
});

module.exports = estudiantes 



