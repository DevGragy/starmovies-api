const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Welcome to StarMovies API");
});

router.use("/movies", require("./movies"));
router.use("/users", require("./users"));

module.exports = router;