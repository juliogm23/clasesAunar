const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const curso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    nombreCurso: {
        type: DataTypes.STRING
    },

    creditos: {
        type: DataTypes.INTEGER
    },
}, {
 timesTamps: false
});

module.exports = curso