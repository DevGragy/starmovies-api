const Review = require("../models/Review");
const User = require("../models/User");
const Admin = require("../models/Admin");
const Movie = require("../models/Movie");

function createReview(req, res, next) {
  User.findByPk(req.body.userName).then((usr) => {
    if (usr) {
      if (req.body.userPassword === usr.getDataValue("userPassword")) {
        Review.findByPk(req.body.idReview).then((rvw) => {
          if (!rvw) {
            Movie.findByPk(req.body.idMovie).then((mvi) => {
              if (mvi) {
                const review = Review.build(req.body);
                review
                  .save()
                  .then((review) => {
                    return res.status(201).json(review);
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
              .send(`Review with id ${req.body.idReview} already exists`);
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

function readReviews(req, res) {
  if (req.body.userName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          //limitado a un numero determinado (colocar ?limit=numero)

          if (req.query && req.query.limit) {
            Review.findAll({
              limit: Number(req.query.limit),
              where: { userName: req.body.userName },
            })
              .then((reviews) => {
                return res.json(reviews);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          }
          //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
          else if (req.query && req.query.attribute) {
            Review.findAll({
              attributes: req.query.attribute.split(", ", 5),
              where: { userName: req.body.userName },
            })
              .then((reviews) => {
                return res.json(reviews);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else {
            Review.findAll({ where: { userName: req.body.userName } })
              .then((reviews) => {
                return res.json(reviews);
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
      Review.findAll({
        limit: Number(req.query.limit),
      })
        .then((reviews) => {
          return res.json(reviews);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    }
    //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
    else if (req.query && req.query.attribute) {
      Review.findAll({
        attributes: req.query.attribute.split(", ", 5),
      })
        .then((reviews) => {
          return res.json(reviews);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      Review.findAll()
        .then((reviews) => {
          return res.json(reviews);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    }
  }
}

function updateReview(req, res, next) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          Review.findByPk(req.body.idReview).then((rvw) => {
            if (!rvw || req.body.idReview === Number(req.params.idReview)) {
              Movie.findByPk(req.body.idMovie).then((mvi) => {
                if (mvi) {
                  Review.findByPk(req.params.idReview)
                    .then((rvx) => {
                      if (req.body.userName === rvx.getDataValue("userName")) {
                        Review.update(req.body, {
                          where: { idReview: req.params.idReview },
                        })
                          .then((review) => {
                            return res.status(201).send(`Review updated`);
                          })
                          .catch(next);
                      } else {
                        return res
                          .status(400)
                          .send(`You can't update this review `);
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      return res
                        .status(400)
                        .send(
                          `There isn't a review with id ${req.params.idReview}`
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
                .send(`Review with id ${req.body.idReview} already exists`);
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
          Review.findByPk(req.body.idReview).then((rvw) => {
            if (!rvw || req.body.idReview === Number(req.params.idReview)) {
              Movie.findByPk(req.body.idMovie).then((mvi) => {
                if (mvi) {
                  Review.update(req.body, {
                    where: { idReview: req.params.idReview },
                  })
                    .then((review) => {
                      return res.status(201).send(`Review updated`);
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
                .send(`Review with id ${req.body.idReview} already exists`);
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

function deleteReview(req, res) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          Review.findByPk(req.params.idReview).then((rvw) => {
            if (!rvw) {
              // si no existe lanzamos un 400
              return res
                .status(400)
                .send(`There isn't a review with id ${req.params.idReview}`);
            } else {
              if (req.body.userName === rvw.getDataValue("userName")) {
                // Si existe, lo eliminamos
                rvw.destroy().then((rvw) => {
                  return res
                    .status(200)
                    .send(`Review with id ${req.params.idReview} deleted`);
                });
              } else {
                return res.status(400).send(`You can't delete this review `);
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
          Review.findByPk(req.params.idReview).then((rvw) => {
            if (!rvw) {
              // si no existe lanzamos un 400
              return res
                .status(400)
                .send(`There isn't a movie with id ${req.params.idMovie}`);
            } else {
              // Si existe, lo eliminamos
              rvw.destroy().then((rvw) => {
                return res
                  .status(200)
                  .send(`Review with id ${req.params.idReview} deleted`);
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

function readReviewById(req, res) {
  Review.findByPk(req.params.idReview).then((rvw) => {
    if (rvw) {
      Review.findByPk(req.params.idReview)
        .then((reviews) => {
          return res.json(reviews);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      return res
        .status(400)
        .send(`There isn't a review with id ${req.params.idReview}`);
    }
  });
}

module.exports = {
  createReview,
  readReviews,
  updateReview,
  deleteReview,
  readReviewById,
};
