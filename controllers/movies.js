const Movie = require("../models/Movie");
const Admin = require("../models/Admin");
const Category = require("../models/Category");
const Review = require("../models/Review");
const Favorite = require("../models/Favorite");

//create

function createMovie(req, res, next) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        Movie.findByPk(req.body.idMovie).then((mvi) => {
          if (!mvi) {
            Category.findByPk(req.body.idCategory).then((cat) => {
              if (cat) {
                const movie = Movie.build(req.body);
                movie
                  .save()
                  .then((movie) => {
                    return res.status(201).json(movie);
                  })
                  .catch(next);
              } else {
                return res
                  .status(400)
                  .send(
                    `Category with number ${req.body.idCategory} doesn't exist`
                  );
              }
            });
          } else {
            // Si ya existe, mostramos mensaje de que ya existe
            return res
              .status(400)
              .send(`Movie with id ${req.body.idMovie} already exists`);
          }
        });
      } else {
        return res.status(400).send(`Password incorrect`);
      }
    } else {
      return res
        .status(400)
        .send(`There is no admin with adminName ${req.body.adminName}`);
    }
  });
}

//read

function readMovies(req, res) {
  //limitado a un numero determinado (colocar ?limit=numero)

  if (req.query && req.query.limit) {
    Movie.findAll({ limit: Number(req.query.limit) })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
    //para seleccionar un atributo (colocar ?nombredelatributo=valor)
  } else if (req.query && req.query.idCategory) {
    Movie.findAll({ where: { idCategory: Number(req.query.idCategory) } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.title) {
    Movie.findAll({ where: { title: req.query.title } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.years) {
    Movie.findAll({ where: { years: Number(req.query.years) } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.rating) {
    Movie.findAll({ where: { rating: req.query.rating } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.languages) {
    Movie.findAll({ where: { languages: req.query.languages } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.director) {
    Movie.findAll({ where: { director: req.query.director } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.description) {
    Movie.findAll({ where: { description: req.query.description } })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
    //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
  } else if (req.query && req.query.attribute) {
    Movie.findAll({
      attributes: req.query.attribute.split(", ", 8),
    })
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else {
    Movie.findAll()
      .then((movies) => {
        return res.json(movies);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  }
}

//update

function updateMovie(req, res, next) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        Movie.findByPk(req.body.idMovie).then((mvi) => {
          if (mvi || req.body.idMovie === Number(req.params.idMovie)) {
            Category.findByPk(req.body.idCategory).then((cat) => {
              if (cat) {
                if (
                  Number(req.params.idMovie) === mvi.getDataValue("idMovie")
                ) {
                  Movie.update(req.body, {
                    where: { idMovie: req.params.idMovie },
                  })
                    .then((movie) => {
                      return res.status(201).send(`Movie updated`);
                    })
                    .catch(next);
                } else {
                  return res
                    .status(400)
                    .send(`You can't update a movies's idMovie `);
                }
              } else {
                return res
                  .status(400)
                  .send(
                    `Category with number ${req.body.idCategory} doesn't exist`
                  );
              }
            });
          } else {
            // Si ya existe, mostramos mensaje de que ya existe
            return res.status(400).send(`You can't update a movies's idMovie`);
          }
        });
      } else {
        return res.status(400).send(`Password incorrect`);
      }
    } else {
      return res
        .status(400)
        .send(`There is no admin with adminName ${req.body.adminName}`);
    }
  });
}

//delete

function deleteMovie(req, res) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        // Usamos findByPK para buscar la pelicula
        Movie.findByPk(req.params.idMovie).then((mvi) => {
          if (!mvi) {
            // si no existe lanzamos un 400
            return res
              .status(400)
              .send(`There isn't a movie with id ${req.params.idMovie}`);
          } else {
            // Si existe, eliminamos los reviews y favoritos de esa pelicula
            Review.destroy({
              where: { idMovie: Number(req.params.idMovie) },
            }).then(() => {
              Favorite.destroy({
                where: { idMovie: Number(req.params.idMovie) },
              }).then(() => {
                // Si existe, lo eliminamos
                mvi.destroy().then((mvi) => {
                  return res
                    .status(200)
                    .send(`Movie with id ${req.params.idMovie} deleted`);
                });
              });
            });
          }
        });
      } else {
        return res.status(400).send(`Password incorrect`);
      }
    } else {
      return res
        .status(400)
        .send(`There is no admin with adminName ${req.body.adminName}`);
    }
  });
}

//read by id

function readMovieById(req, res) {
  Movie.findByPk(req.params.idMovie).then((mvi) => {
    if (mvi) {
      Movie.findByPk(req.params.idMovie)
        .then((movies) => {
          return res.json(movies);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      return res
        .status(400)
        .send(`There isn't a movie with id ${req.params.idMovie}`);
    }
  });
}

module.exports = {
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
  readMovieById,
};
