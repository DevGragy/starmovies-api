class Movie {
    constructor(
        id,
        title,
        year,
        rating,
        category,
        language,
        director,
        description
    ) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.raiting = rating;
        this.category = category;
        this.languaje = language;
        this.director = director;
        this.description = description;
    }
}

module.exports = Movie;