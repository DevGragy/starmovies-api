const Admin = require("../models/Admin");

function createAdmin(req, res) {
    const admin = new Admin(req.body);
    res.status(200).send(admin);
}

function readAdmins(req, res) {
    const admin1 = new Admin(
        1,
        "admin",
        "admin_lh",
        "Luis",
        "Hernandez",
        "adminlh@mail.com",
        "perfectpass"
    );
    const admin2 = new Admin(
        1,
        "admin",
        "admin_jg",
        "Jorge",
        "Gutierrez",
        "adminjg@mail.com",
        "passcode"
    );
    res.send([admin1, admin2]);
}

function updateAdmin(req, res) {
    let admin1 = new Admin(
        req.params.id,
        "admin",
        "admin_lh",
        "Luis",
        "Hernandez",
        "adminlh@mail.com",
        "perfectpass"
    );
    const modifications = req.body;
    admin1 = {...admin1, ...modifications };
    res.send(user1);
}

function deleteAdmin(req, res) {
    res.status(200).send(`Admin ${req.params.id} deleted`);
}

module.exports = {
    createAdmin,
    readAdmins,
    updateAdmin,
    deleteAdmin,
};