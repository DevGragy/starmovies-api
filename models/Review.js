class Review {
  constructor(id, idPelicula, user, review, rating) {
    this.id = id;
    this.idPelicula = idPelicula;
    this.user = user;
    this.review = review;
    this.rating = rating;
  }

  insert() {
    //Inserta un review
  }

  update() {
    //Actualiza la review
  }

  delete() {
    //Elimina un registro
  }

  show() {
    //Consulta de registros
  }
}

module.exports = Review;
