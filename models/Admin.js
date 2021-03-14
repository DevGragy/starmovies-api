const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

const Admin = sequelize.define(
  "Admin",
  {
    adminName: {
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
    adminPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Admins",
  }
);

module.exports = Admin;
