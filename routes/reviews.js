const router = require("express").Router();
const {
    createReview,
    readReviews,
    updateReview,
    deleteReview,
} = require("../controllers/reviews");

router.post("/", createReview);
router.get("/", readReviews);
router.put("/:review", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;