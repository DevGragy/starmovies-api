const router = require("express").Router();
const {
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  readUserByuserName,
} = require("../controllers/users");

router.post("/", createUser);
router.get("/", readUsers);
router.put("/:userName", updateUser);
router.delete("/:userName", deleteUser);
router.get("/:userName", readUserByuserName);

module.exports = router;
