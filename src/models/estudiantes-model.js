const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/sequelize");
const estudiantes = sequelize.define(
  "estudiantes",
  {
    // definiendo los atributos de la tabla
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
    id_estudiante: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado_financiero: {
      type: DataTypes.STRING,
    },
    id_financiero: {
      type: DataTypes.INTEGER,
    },
    estado_matricula: {
      type: DataTypes.STRING,
    },
    carrera: {
      type: DataTypes.STRING,
    },
    direccion: {
      type: DataTypes.STRING,
    },
  },
  // Otras parametros de configuraciones
  {
    timestamps: false,
  }
);
module.exports = estudiantes;

