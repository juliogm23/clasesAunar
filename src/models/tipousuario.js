const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const tipousuario = sequelize.define('tipousuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    tipoUsuario: {
        type: DataTypes.STRING
    },
}, {
 timesTamps: false
});

module.exports = tipousuario