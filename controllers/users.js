const User = require("../models/User");

function createUser(req, res) {
    const user = new User(req.body);
    res.status(200).send(user);
}

function readUsers(req, res) {
    const user1 = new User(
        1,
        "user",
        "coolname01",
        "Jay",
        "Garcia",
        "mail@mail.com",
        "secretpass"
    );
    const user2 = new User(
        1,
        "user",
        "anotheruser",
        "Max",
        "Rodriguez",
        "mail@mail.com",
        "rootpass"
    );
    res.send([user1, user2]);
}

function updateUser(req, res) {
    let user1 = new User(
        req.params.id,
        "user",
        "coolname01",
        "Jay",
        "Garcia",
        "mail@mail.com",
        "secretpass"
    );
    const modifications = req.body;
    user1 = {...user1, ...modifications };
    res.send(user1);
}

function deleteUser(req, res) {
    res.status(200).send(`User ${req.params.id} deleted`);
}

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
};