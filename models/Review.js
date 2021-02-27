class Review {
    constructor(id, idMovie, user, review, rating) {
        this.id = id;
        this.idMovie = idMovie;
        this.user = user;
        this.review = review;
        this.rating = rating;
    }
}

module.exports = Review;