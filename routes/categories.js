const router = require("express").Router();
const {
  createCategory,
  readCategories,
  updateCategory,
  deleteCategory,
  readCategoryById,
} = require("../controllers/categories");

router.post("/", createCategory);
router.get("/", readCategories);
router.put("/:idCategory", updateCategory);
router.delete("/:idCategory", deleteCategory);
router.get("/:idCategory", readCategoryById);

module.exports = router;
