const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://u23lfgk6uveu9wph:iQJEjwBpaaiktALryZu0@b7yyugoxnij8erbxhks7-mysql.services.clever-cloud.com:3306/b7yyugoxnij8erbxhks7"
);

const Movie = require("../models/Movie");
const User = require("../models/User");

const Review = sequelize.define(
  "Review",
  {
    idReview: {
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
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Review",
  }
);

Review.hasOne(Movie, {
  foreignKey: "idMovie",
});

Review.hasOne(User, {
  foreignKey: "userName",
});

module.exports = Review;
