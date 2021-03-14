const Category = require("../models/Category");
const Admin = require("../models/Admin");
const Movie = require("../models/Movie");

function createCategory(req, res, next) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        Category.findByPk(req.body.idCategory).then((cat) => {
          if (!cat) {
            const category = Category.build(req.body);
            category
              .save()
              .then((category) => {
                return res.status(201).json(category);
              })
              .catch(next);
          } else {
            // Si ya existe, mostramos mensaje de que ya existe
            return res
              .status(400)
              .send(`Category with id ${req.body.idCategory} already exists`);
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

function readCategories(req, res) {
  //limitado a un numero determinado (colocar ?limit=numero)

  if (req.query && req.query.limit) {
    Category.findAll({ limit: Number(req.query.limit) })
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
    //para seleccionar un atributo (colocar ?nombredelatributo=valor)
  } else if (req.query && req.query.idCategory) {
    Category.findAll({
      where: { idCategory: Number(req.query.idCategory) },
    })
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.category) {
    Category.findAll({ where: { category: req.query.category } })
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else if (req.query && req.query.descriptions) {
    Category.findAll({ where: { lastName: req.query.descriptions } })
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  }
  //Para checar atributos colocar ?attribute=atributo1, atributo2, etc.
  else if (req.query && req.query.attribute) {
    Category.findAll({
      attributes: req.query.attribute.split(", ", 3),
    })
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  } else {
    Category.findAll()
      .then((categories) => {
        return res.json(categories);
      })
      .catch((error) => {
        console.log(error);
        return res.sendStatus(401);
      });
  }
}

function updateCategory(req, res, next) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        Category.findByPk(req.body.idCategory).then((cat) => {
          if (cat) {
            if (
              Number(req.params.idCategory) === cat.getDataValue("idCategory")
            ) {
              Category.update(req.body, {
                where: { idCategory: Number(req.params.idCategory) },
              })
                .then(() => {
                  return res.status(201).send(`Category updated`);
                })
                .catch(next);
            } else {
              return res
                .status(400)
                .send(`You can't update a Category's idCategory `);
            }
          } else {
            return res
              .status(400)
              .send(`You can't update a Category's idCategory`);
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

function deleteCategory(req, res) {
  Admin.findByPk(req.body.adminName).then((adm) => {
    if (adm) {
      if (req.body.adminPassword === adm.getDataValue("adminPassword")) {
        // Usamos findByPK para buscar la categoria
        Category.findByPk(req.params.idCategory).then((cat) => {
          if (!cat) {
            // si no existe lanzamos un 400
            return res
              .status(400)
              .send(`There isn't a Category with id ${req.params.idCategory}`);
          } else {
            //Cambiamos todas las películas con el id de esa categoria a default
            Movie.update(
              { idCategory: 0 },
              { where: { idCategory: Number(req.params.idCategory) } }
            ).then(() => {
              //Borramos la categoria
              Category.destroy({
                where: { idCategory: Number(req.params.idCategory) },
              }).then(() => {
                return res
                  .status(200)
                  .send(`Category with id ${req.params.idCategory} deleted`);
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

function readCategoryById(req, res) {
  Category.findByPk(req.params.idCategory).then((cat) => {
    if (cat) {
      Category.findByPk(req.params.idCategory)
        .then((categories) => {
          return res.json(categories);
        })
        .catch((error) => {
          console.log(error);
          return res.sendStatus(401);
        });
    } else {
      return res
        .status(400)
        .send(`There isn't a Category with id ${req.params.idCategory}`);
    }
  });
}

module.exports = {
  createCategory,
  readCategories,
  updateCategory,
  deleteCategory,
  readCategoryById,
};
