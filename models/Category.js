const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

const Movie = require("../models/Movie");

const Category = sequelize.define(
  "Category",
  {
    idCategory: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Category",
  }
);

Category.hasMany(Movie, {
  foreignKey: "idCategory",
});

module.exports = Category;
