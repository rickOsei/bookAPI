const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  author: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name must not exceed 20 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
