const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const UserSchema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  documentType: {
    allowNull: false,
    type: DataTypes.ENUM('CC', 'TI', 'RC', 'CE', 'CI', 'DNI'),
    defaultValue: 'CC',
  },
  documentNumber: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
  },
  userType: {
    allowNull: false,
    type: DataTypes.ENUM('ADMIN','ESTUDIANTE'),
    defaultValue: 'ADMIN',
  },
  userName: {
    allowNull: false,
    type: DataTypes.CHAR,
    unique: true,
  },
  state: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate() {
    // assocoate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: "User",
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
