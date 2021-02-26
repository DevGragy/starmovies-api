class Review{
    constructor(id, idPelicula, user, review, rating) {
        this.id = id;
        this.idPelicula = idPelicula;
        this.user = user;
        this.review = review;
        this.rating = rating;
    }
}

module.exports = Review;