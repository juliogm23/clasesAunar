const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const financiero = sequelize.define('financiero', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    estadoFinanciero: {
        type: DataTypes.STRING
    },

    pagos: {
        type: DataTypes.INTEGER
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

module.exports = financiero