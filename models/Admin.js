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
}

module.exports = Admin;