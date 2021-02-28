const router = require("express").Router();
const {
    createFavorite,
    readFavorites,
    updateFavorite,
    deleteFavorite,
} = require("../controllers/favorites");

router.post("/", createFavorite);
router.get("/", readFavorites);
router.put("/:idPelicula", updateFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;