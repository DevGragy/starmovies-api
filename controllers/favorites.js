const Favorite = require("../models/Favorite");

function createFavorite(req, res) {
    const favorite = new Favorite(req.body);
    res.status(200).send(favorite);
}

function readFavorites(req, res) {
    const favorite1 = new Favorite(
        1,
        1,
        "coolname01",

    );
    const favorite2 = new Favorite(
        2,
        2,
        "anotheruser",
    );
    res.send([favorite1, favorite2]);
}

function updateFavorite(req, res) {
    let favorite1 = new Favorite(
        1,
        req.params.idPelicula,
        "coolname01",
    );
    const modifications = req.body;
    favorite1 = {...favorite1, ...modifications };
    res.send(favorite1);
}

function deleteFavorite(req, res) {
    res.status(200).send(`Favorite ${req.params.id} deleted`);
}

module.exports = {
    createFavorite,
    readFavorites,
    updateFavorite,
    deleteFavorite,
};