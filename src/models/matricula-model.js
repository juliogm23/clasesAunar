const { Sequelize, datatypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const matricula = sequelize.define(
  "matricula",
  {
    // Definición de los atributos de la tabla
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    tipo_docuemento: {
      type: DataTypes.STRING,
    },
    numero_docuemento: {
      type: DataTypes.STRING,
    },
    correo: {
      type: DataTypes.STRING,
    },
    celular: {
      type: DataTypes.STRING,
    },
    carrera: {
      type: DataTypes.STRING,
    },
    estado_financiero: {
      type: DataTypes.STRING,
    },
    costo_carrera: {
      type: DataTypes.STRING,
    },
    estado_matricula: {
      type: DataTypes.STRING,
    },
  },
  {
    // Otros parámetros de configuración

    timestamps: false,
  }
);
module.exports = matricula;
