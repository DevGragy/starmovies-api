const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mysql://u23lfgk6uveu9wph:iQJEjwBpaaiktALryZu0@b7yyugoxnij8erbxhks7-mysql.services.clever-cloud.com:3306/b7yyugoxnij8erbxhks7"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Its alive!!!");
  })
  .catch((err) => {
    console.log("No se conecto :(", err);
  });
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/v1", require("./routes"));

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server on port " + server.address().port);
});
