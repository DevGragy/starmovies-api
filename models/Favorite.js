const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.MYSQL_URI);

const Movie = require("../models/Movie");
const User = require("../models/User");

const Favorite = sequelize.define(
  "Favorite",
  {
    idFavorite: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idMovie: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Favorite",
  }
);

Favorite.hasOne(Movie, {
  foreignKey: "idMovie",
});

Favorite.hasOne(User, {
  foreignKey: "userName",
});

module.exports = Favorite;
