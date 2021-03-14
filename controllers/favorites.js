const Favorite = require("../models/Favorite");
const User = require("../models/User");
const Admin = require("../models/Admin");
const Movie = require("../models/Movie");

function createFavorite(req, res, next) {
  User.findByPk(req.body.userName).then((usr) => {
    if (usr) {
      if (req.body.userPassword === usr.getDataValue("userPassword")) {
        Favorite.findByPk(req.body.idFavorite).then((fav) => {
          if (!fav) {
            Movie.findByPk(req.body.idMovie).then((mvi) => {
              if (mvi) {
                const favorite = Favorite.build(req.body);
                favorite
                  .save()
                  .then((favorite) => {
                    return res.status(201).json(favorite);
                  })
                  .catch(next);
              } else {
                return res
                  .status(400)
                  .send(`Movie with id ${req.body.idMovie} doesn't exist`);
              }
            });
          } else {
            // Si ya existe, mostramos mensaje de que ya existe
            return res
              .status(400)
              .send(`Favorite with id ${req.body.idFavorite} already exists`);
          }
        });
      } else {
        return res.status(400).send(`Password incorrect`);
      }
    } else {
      return res
        .status(400)
        .send(`There is no user with userName ${req.body.userName}`);
    }
  });
}

function readFavorites(req, res) {
  if (req.body.userName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          //limitado a un numero determinado (colocar ?limit=numero)

          if (req.query && req.query.limit) {
            Favorite.findAll({
              limit: Number(req.query.limit),
              where: { userName: req.body.userName },
            })
              .then((favorites) => {
                return res.json(favorites);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          }
          //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
          else if (req.query && req.query.attribute) {
            Favorite.findAll({
              attributes: req.query.attribute.split(", ", 3),
              where: { userName: req.body.userName },
            })
              .then((favorites) => {
                return res.json(favorites);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else {
            Favorite.findAll({ where: { userName: req.body.userName } })
              .then((favorites) => {
                return res.json(favorites);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          }
        } else {
          return res.status(400).send(`Password incorrect`);
        }
      } else {
        return res
          .status(400)
          .send(`There is no user with userName ${req.body.userName}`);
      }
    });
  } else {
    if (req.query && req.query.limit) {
      Favorite.findAll({
        limit: Number(req.query.limit),
      })
        .then((favorites) => {
          return res.json(favorites);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    }
    //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
    else if (req.query && req.query.attribute) {
      Favorite.findAll({
        attributes: req.query.attribute.split(", ", 3),
      })
        .then((favorites) => {
          return res.json(favorites);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      Favorite.findAll()
        .then((favorites) => {
          return res.json(favorites);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    }
  }
}

function updateFavorite(req, res, next) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          Favorite.findByPk(req.body.idFavorite).then((fav) => {
            if (!fav || req.body.idFavorite === Number(req.params.idFavorite)) {
              Movie.findByPk(req.body.idMovie).then((mvi) => {
                if (mvi) {
                  Favorite.findByPk(req.params.idFavorite)
                    .then((fav) => {
                      if (req.body.userName === fav.getDataValue("userName")) {
                        Favorite.update(req.body, {
                          where: { idFavorite: req.params.idFavorite },
                        })
                          .then((favorite) => {
                            return res.status(201).send(`Favorite updated`);
                          })
                          .catch(next);
                      } else {
                        return res
                          .status(400)
                          .send(`You can't update this favorite `);
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      return res
                        .status(400)
                        .send(
                          `There isn't a favorite with id ${req.params.idFavorite}`
                        );
                    });
                } else {
                  return res
                    .status(400)
                    .send(`Movie with id ${req.body.idMovie} doesn't exist`);
                }
              });
            } else {
              // Si ya existe, mostramos mensaje de que ya existe
              return res
                .status(400)
                .send(`Favorite with id ${req.body.idFavorite} already exists`);
            }
          });
        } else {
          return res.status(400).send(`Password incorrect`);
        }
      } else {
        return res
          .status(400)
          .send(`There is no user with userName ${req.body.userName}`);
      }
    });
  } else {
    Admin.findByPk(req.body.adminName).then((adm) => {
      if (adm) {
        if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
          Favorite.findByPk(req.body.idFavorite).then((fav) => {
            if (!fav || req.body.idFavorite === Number(req.params.idFavorite)) {
              Movie.findByPk(req.body.idMovie).then((mvi) => {
                if (mvi) {
                  Favorite.update(req.body, {
                    where: { idFavorite: req.params.idFavorite },
                  })
                    .then((favorite) => {
                      return res.status(201).send(`Favorite updated`);
                    })
                    .catch(next);
                } else {
                  return res
                    .status(400)
                    .send(`Movie with id ${req.body.idMovie} doesn't exist`);
                }
              });
            } else {
              // Si ya existe, mostramos mensaje de que ya existe
              return res
                .status(400)
                .send(`Favorite with id ${req.body.idFavorite} already exists`);
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
}

function deleteFavorite(req, res) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          Favorite.findByPk(req.params.idFavorite).then((fav) => {
            if (!fav) {
              // si no existe lanzamos un 400
              return res
                .status(400)
                .send(
                  `There isn't a favorite with id ${req.params.idFavorite}`
                );
            } else {
              if (req.body.userName === fav.getDataValue("userName")) {
                // Si existe, lo eliminamos
                fav.destroy().then((fav) => {
                  return res
                    .status(200)
                    .send(`Favorite with id ${req.params.idFavorite} deleted`);
                });
              } else {
                return res.status(400).send(`You can't delete this favorite `);
              }
            }
          });
        } else {
          return res.status(400).send(`Password incorrect`);
        }
      } else {
        return res
          .status(400)
          .send(`There is no user with userName ${req.body.userName}`);
      }
    });
  } else {
    Admin.findByPk(req.body.adminName).then((adm) => {
      if (adm) {
        if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
          Favorite.findByPk(req.params.idFavorite).then((fav) => {
            if (!fav) {
              // si no existe lanzamos un 400
              return res
                .status(400)
                .send(
                  `There isn't a favorite with id ${req.params.idFavorite}`
                );
            } else {
              // Si existe, lo eliminamos
              fav.destroy().then((rvw) => {
                return res
                  .status(200)
                  .send(`Favorite with id ${req.params.idFavorite} deleted`);
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
}

function readFavoriteById(req, res) {
  Favorite.findByPk(req.params.idFavorite).then((fav) => {
    if (fav) {
      Favorite.findByPk(req.params.idFavorite)
        .then((favorites) => {
          return res.json(favorites);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      return res
        .status(400)
        .send(`There isn't a Favorite with id ${req.params.idFavorite}`);
    }
  });
}

module.exports = {
  createFavorite,
  readFavorites,
  updateFavorite,
  deleteFavorite,
  readFavoriteById,
};
