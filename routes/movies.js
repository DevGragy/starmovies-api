const router = require("express").Router();
const {
    createMovie,
    readMovie,
    updateMovie,
    deleteMovie,
} = require("../controllers/movies");

router.post("/", createMovie);
router.get("/", readMovie);
router.put("/:title", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;