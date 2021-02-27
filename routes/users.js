const router = require("express").Router();
const {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
} = require("../controllers/users");

router.post("/", createUser);
router.get("/", readUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;