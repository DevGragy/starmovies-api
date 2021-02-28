const router = require("express").Router();
const {
    createCategory,
    readCategories,
    updateCategory,
    deleteCategory,
} = require("../controllers/categories");

router.post("/", createCategory);
router.get("/", readCategories);
router.put("/:category", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;