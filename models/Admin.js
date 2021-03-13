const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://u23lfgk6uveu9wph:iQJEjwBpaaiktALryZu0@b7yyugoxnij8erbxhks7-mysql.services.clever-cloud.com:3306/b7yyugoxnij8erbxhks7"
);

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
