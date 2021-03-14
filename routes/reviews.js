const router = require("express").Router();
const {
  createReview,
  readReviews,
  updateReview,
  deleteReview,
  readReviewById,
} = require("../controllers/reviews");

router.post("/", createReview);
router.get("/", readReviews);
router.put("/:idReview", updateReview);
router.delete("/:idReview", deleteReview);
router.get("/:idReview", readReviewById);

module.exports = router;
