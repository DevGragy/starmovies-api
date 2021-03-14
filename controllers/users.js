const User = require("../models/User");
const Admin = require("../models/Admin");
const Review = require("../models/Review");
const Favorite = require("../models/Favorite");

//create

function createUser(req, res, next) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        User.findByPk(req.body.userName).then((usr) => {
          if (!usr) {
            const usr = User.build(req.body);
            usr
              .save()
              .then((user) => {
                return res.status(201).json(user);
              })
              .catch(next);
          } else {
            // Si ya existe, mostramos mensaje de que ya existe
            return res
              .status(400)
              .send(`User ${req.body.userName} already exists`);
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

function readUsers(req, res) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.userPassword === usr.getDataValue("userPassword")) {
          User.findAll({ where: { userName: req.body.userName } })
            .then((users) => {
              return res.json(users);
            })
            .catch((error) => {
              console.log(error);
              return res.sendStatus(401);
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
          //limitado a un numero determinado (colocar ?limit=numero)

          if (req.query && req.query.limit) {
            User.findAll({ limit: Number(req.query.limit) })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
            //para seleccionar un atributo (colocar ?nombredelatributo=valor)
          } else if (req.query && req.query.userName) {
            User.findAll({ where: { userName: req.query.userName } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else if (req.query && req.query.firstName) {
            User.findAll({ where: { firstName: req.query.firstName } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else if (req.query && req.query.lastName) {
            User.findAll({ where: { lastName: req.query.lastName } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else if (req.query && req.query.roles) {
            User.findAll({ where: { roles: req.query.roles } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else if (req.query && req.query.email) {
            User.findAll({ where: { email: req.query.email } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else if (req.query && req.query.userPassword) {
            User.findAll({ where: { director: req.query.userPassword } })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          }
          //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
          else if (req.query && req.query.attribute) {
            User.findAll({
              attributes: req.query.attribute.split(", ", 6),
            })
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else {
            User.findAll()
              .then((users) => {
                return res.json(users);
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
          .send(`There is no admin with adminName ${req.body.adminName}`);
      }
    });
  }
}

//update

function updateUser(req, res, next) {
  if (req.body.userName && !req.body.adminName) {
    User.findByPk(req.body.userName).then((usr) => {
      if (usr) {
        if (req.body.oldPassword === usr.getDataValue("userPassword")) {
          if (req.params.userName === usr.getDataValue("userName")) {
            User.update(req.body, {
              where: { userName: req.params.userName },
            })
              .then((user) => {
                return res.status(201).send(`User updated`);
              })
              .catch(next);
          } else {
            return res.status(400).send(`You can't update this user `);
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
    Admin.findByPk(req.body.adminName).then((adm) => {
      if (adm) {
        if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
          User.findByPk(req.body.userName).then((usr) => {
            if (usr) {
              if (req.params.userName === usr.getDataValue("userName")) {
                User.update(req.body, {
                  where: { userName: req.params.userName },
                })
                  .then((user) => {
                    return res.status(201).send(`User updated`);
                  })
                  .catch(next);
              } else {
                return res
                  .status(400)
                  .send(`You can't update a user's userName `);
              }
            } else {
              return res
                .status(400)
                .send(`There is no user with userName ${req.body.userName}`);
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

//delete

function deleteUser(req, res) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        // Usamos findByPK para buscar el usuario
        User.findByPk(req.params.userName).then((usr) => {
          if (!usr) {
            // si no existe lanzamos un 400
            return res
              .status(400)
              .send(`There isn't a user with userName ${req.params.userName}`);
          } else {
            // Si existe, actualizamos los reviews a "no userName" y eliminamos los favoritos de ese usuario
            Review.update(
              { userName: "No userName" },
              { where: { userName: req.params.userName } }
            ).then(() => {
              Favorite.destroy({
                where: { userName: req.params.userName },
              }).then(() => {
                // Si existe, lo eliminamos
                usr.destroy().then((user) => {
                  return res
                    .status(200)
                    .send(`User with userName ${req.params.userName} deleted`);
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

//read by userName

function readUserByuserName(req, res) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        User.findByPk(req.params.userName).then((usr) => {
          if (usr) {
            User.findByPk(req.params.userName)
              .then((users) => {
                return res.json(users);
              })
              .catch((error) => {
                console.log(error);
                return res.sendStatus(401);
              });
          } else {
            return res
              .status(400)
              .send(`There isn't a User with userName ${req.params.userName}`);
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

module.exports = {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  readUserByuserName,
};
