const express = require("express");
const {
  getAllBooks,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/bookController");
const login = require("../controller/user_controller");
const router = express.Router();
const authenticationMiddleware = require("../middleware/auth");

router.route("/").get(authenticationMiddleware, getAllBooks).post(createBook);
router.route("/login").post(login);
router.route("/:id").patch(editBook).delete(deleteBook);

module.exports = router;
