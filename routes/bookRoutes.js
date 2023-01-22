const express = require("express");
const {
  getAllBooks,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/bookController");
const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").patch(editBook).delete(deleteBook);

module.exports = router;
