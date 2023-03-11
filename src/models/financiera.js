const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const finaniera = sequelize.define('financiera', {
 
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_estudiante: {
    type: DataTypes.INTEGER

  },
  id_matricula: {
    type: DataTypes.INTEGER

  },
  costo_carrera: {
    type: DataTypes.INTEGER

  },
  estado_financiero: {
    type: DataTypes.STRING
  
  },
}, {

});


