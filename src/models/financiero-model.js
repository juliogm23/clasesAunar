const { Sequelize, DataTypes } = require("sequelize");
const financiero = Sequelize.define(
  "financiero",
  {
    // Definición de los atributos de la tabla
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido: {
      type: DataTypes.STRING,
    },
    Tipo_Documento: {
      type: DataTypes.STRING,
    },
    Numero_Documento: {
      type: DataTypes.STRING,
    },
    Correo: {
      type: DataTypes.STRING,
    },
    Celular: {
      type: DataTypes.STRING,
    },
    Carrerea: {
      type: DataTypes.STRING,
    },
  },
  {
    // Otros parámetros de configuración
  }
);
