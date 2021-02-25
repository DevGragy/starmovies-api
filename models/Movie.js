class Movie {
    constructor(
        id,
        title,
        year,
        raiting,
        category,
        languaje,
        director,
        description
    ) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.raiting = raiting;
        this.category = category;
        this.languaje = languaje;
        this.director = director;
        this.description = description;
    }
}

module.exports = Movie;