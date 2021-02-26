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

  insert() {
    //Inserta una película a la BD
  }

  update() {
    //Actualiza los datos de la película
  }

  delete() {
    //Elimina una película
  }

  show() {
    //Consulta de registros de película
  }
}

module.exports = Movie;
