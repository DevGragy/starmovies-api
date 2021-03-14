const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

const User = sequelize.define(
  "User",
  {
    userName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roles: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Users",
  }
);

module.exports = User;
