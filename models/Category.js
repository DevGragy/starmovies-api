const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://u23lfgk6uveu9wph:iQJEjwBpaaiktALryZu0@b7yyugoxnij8erbxhks7-mysql.services.clever-cloud.com:3306/b7yyugoxnij8erbxhks7"
);

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
