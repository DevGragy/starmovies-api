class User {
  constructor(id, role, username, firstName, lastName, email, password) {
    this.id = id;
    this.role = role;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  register() {
    //Registrar usuario tipo User
  }

  login() {
    //Inicio de sesión de User
  }

  update() {
    //Actualiza los datos del usuario User
  }

  delete() {
    //Elimina un registro
  }

  show() {
    //Consulta de registros
  }
}

module.exports = User;
