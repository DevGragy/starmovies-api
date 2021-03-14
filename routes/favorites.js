const router = require("express").Router();
const {
  createFavorite,
  readFavorites,
  updateFavorite,
  deleteFavorite,
  readFavoriteById,
} = require("../controllers/favorites");

router.post("/", createFavorite);
router.get("/", readFavorites);
router.put("/:idFavorite", updateFavorite);
router.delete("/:idFavorite", deleteFavorite);
router.get("/:idFavorite", readFavoriteById);

module.exports = router;
