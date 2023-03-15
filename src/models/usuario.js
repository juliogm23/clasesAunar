const{Sequelize, DataTypes} = require('Sequelize');
const sequelize = require('/clasesAunar/src/database')

const usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primarykey:true
    },

    nombreUsuario: {
        type: DataTypes.STRING
    },

    correo: {
        type: DataTypes.STRING
    },

    contraseña: {
        type: DataTypes.STRING
    },

    contraseña: {
        type: DataTypes.INTEGER
    },

 timesTamps: false
});

module.exports = usuario