const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const estudiante = sequelize.define('estudiante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    nombreEstudiante: {
        type: DataTypes.STRING
    },

    apellidoEstudiante: {
        type: DataTypes.STRING
    },

    idCurso: {
        type: DataTypes.INTEGER
    },
}, {
 timesTamps: false
});

module.exports = estudiante