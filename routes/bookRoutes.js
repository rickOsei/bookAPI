const express = require("express");
const {
  createAuthor,
  getAllAuthors,
  deleteAuthor,
  updateAuthor,
} = require("../controller/authorController");
const {
  getAllBooks,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/bookController");
const login = require("../controller/user_controller");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").patch(editBook).delete(deleteBook);

// author route
router.route("/author").post(createAuthor).get(getAllAuthors);
router.route("/author/:id").delete(deleteAuthor).patch(updateAuthor);

// login route
router.route("/login").post(login);

module.exports = router;
