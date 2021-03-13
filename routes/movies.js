const router = require("express").Router();
const {
  createMovie,
  readMovies,
  updateMovie,
  deleteMovie,
  readMovieById,
} = require("../controllers/movies");

router.post("/", createMovie);
router.get("/", readMovies);
router.put("/:idMovie", updateMovie);
router.delete("/:idMovie", deleteMovie);
router.get("/:idMovie", readMovieById);

module.exports = router;
