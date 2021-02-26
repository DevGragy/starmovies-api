class Admin {
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
    //Registrar usuario tipo Admin
  }

  login() {
    //Inicio de sesión de Admin
  }

  update() {
    //Actualiza los datos del usuario Admin
  }

  delete() {
    //Elimina un registro
  }

  show() {
    //Consulta de registros
  }
}

module.exports = Admin;
