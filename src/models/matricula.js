const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const matricula = sequelize.define('matricula', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    fechaMatricula: {
        type: DataTypes.DATATIME
    },

    idEstudiante: {
        type: DataTypes.INTEGER
    },

    idCurso: {
        type: DataTypes.INTEGER
    },
}, {
 timesTamps: false
});

module.exports = matricula