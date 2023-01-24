const Book = require("../model/bookModel");

const getAllBooks = async (req, res) => {
  const books = await Book.find({});
  res.json({ msg: books });
};

const createBook = async (req, res) => {
  const book = await Book.create(req.body);
  res.json({ success: true, msg: book });
};

const editBook = async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.updateOne({ _id: bookID }, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ success: true, msg: book });
};

const deleteBook = async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findByIdAndDelete({ _id: bookID });
  res.json({ success: true, msg: book });
};

module.exports = { getAllBooks, createBook, editBook, deleteBook };
