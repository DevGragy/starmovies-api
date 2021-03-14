const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

//const Category = require("../models/Category");

const Movie = sequelize.define(
  "Movie",
  {
    idMovie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idCategory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    years: DataTypes.INTEGER,
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    languages: DataTypes.STRING,
    director: {
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
    tableName: "Movies",
  }
);

//Movie.hasOne(Category);

module.exports = Movie;
