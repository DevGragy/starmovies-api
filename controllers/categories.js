const Category = require("../models/Category");

function createCategory(req, res) {
    const category = new Category(req.body);
    res.status(200).send(category);
}

function readCategories(req, res) {
    const category1 = new Category(
        1,
        "Fantasy",
        "Films with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.",
    );
    const category2 = new Category(
        2,
        "Crime",
        "Films that generally involve various aspects of crime and its detection.",
    );
    res.send([category1, category2]);
}

function updateCategory(req, res) {
    let category1 = new Category(
        1,
        req.params.category,
        "Films with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds.",
    );
    const modifications = req.body;
    category1 = {...category1, ...modifications };
    res.send(category1);
}

function deleteCategory(req, res) {
    res.status(200).send(`Category ${req.params.id} deleted`);
}

module.exports = {
    createCategory,
    readCategories,
    updateCategory,
    deleteCategory,
};