const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Welcome to StarMovies API");
});

router.use("/admins", require("./admins"));
router.use("/categories", require("./categories"));
router.use("/favorites", require("./favorites"));
router.use("/movies", require("./movies"));
router.use("/reviews", require("./reviews"));
router.use("/users", require("./users"));

module.exports = router;