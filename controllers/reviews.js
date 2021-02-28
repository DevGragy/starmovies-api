const Review = require("../models/Review");

function createReview(req, res) {
    const review = new Review(req.body);
    res.status(200).send(review);
}

function readReviews(req, res) {
    const review1 = new Review(
        1,
        1,
        "coolname01",
        "Well acted, well directed, and full of Whimsy. Harry Potter and the Sorcerers Stone proves to be an entertaining and magical spectacle that made stars out of Daniel Radcliffe, Emma Watson, and Rupert Grint.",
        8
    );
    const review2 = new Review(
        2,
        2,
        "anotheruser",
        "This movie is such a masterpiece for many reasons. The way everything connects makes it really important for you to pay attention. Lots of action and very funny. It also has a really good balance of everything you look for in a movie.",
        10
    );

    res.send([review1, review2]);
}

function updateReview(req, res) {
    let review2 = new Review(
        2,
        2,
        "anotheruser",
        req.params.review,
        10
    );
    const modifications = req.body;
    review2 = {...review2, ...modifications };
    res.send(review2);
}

function deleteReview(req, res) {
    res.status(200).send(`Review ${req.params.id} deleted`);
}

module.exports = {
    createReview,
    readReviews,
    updateReview,
    deleteReview,
};