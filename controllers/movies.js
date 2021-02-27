const Movie = require("../models/Movie");

function createMovie(req, res) {
    const movie = new Movie(req.body);
    res.status(200).send(movie);
}

function readMovie(req, res) {
    const movie1 = new Movie(
        1,
        "Harry Potter",
        2001,
        "A",
        "Fantasy",
        "English",
        "Chris Columbus",
        "Is a 2001 fantasy film directed by Chris Columbus and distributed by Warner Bros. Pictures, based on J. K. Rowlings 1997 novel of the same name."
    );
    const movie2 = new Movie(
        2,
        "Pulp Fiction",
        1994,
        "C",
        "Crime",
        "English",
        "Quentin Tarantino",
        "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary."
    );

    res.send([movie1, movie2]);
}

function updateMovie(req, res) {
    let movie2 = new Movie(
        2,
        req.params.title,
        1994,
        "C",
        "Crime",
        "English",
        "Quentin Tarantino",
        "Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary."
    );
    const modifications = req.body;
    movie2 = {...movie2, ...modifications };
    res.send(movie2);
}

function deleteMovie(req, res) {
    res.status(200).send(`Movie ${req.params.id} deleted`);
}

module.exports = {
    createMovie,
    readMovie,
    updateMovie,
    deleteMovie,
};