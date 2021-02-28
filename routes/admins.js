const router = require("express").Router();
const {
    createAdmin,
    readAdmins,
    updateAdmin,
    deleteAdmin,
} = require("../controllers/admins");

router.post("/", createAdmin);
router.get("/", readAdmins);
router.put("/:id", updateAdmin);
router.delete("/:id", deleteAdmin);

module.exports = router;