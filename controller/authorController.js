const authorModel = require("../model/authorModel");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../errors");

const createAuthor = async (req, res) => {
  const populate = authorModel.create(req.body).populate("books");
  const author = await populate;
  res.status(StatusCodes.CREATED).json({ success: true, msg: author });
  // throw new BadRequestError("Can't create author");
};

const getAllAuthors = async (req, res) => {
  const populate = authorModel.find({}).populate("books");
  const authors = await populate;
  res.status(StatusCodes.OK).json({ success: true, data: authors });
};

const deleteAuthor = async (req, res) => {
  const { id: authorID } = req.params;
  const author = await authorModel.findByIdAndDelete({ _id: authorID });
  res.status(StatusCodes.OK).json({ success: true, data: author });
};

const updateAuthor = async (req, res) => {
  const { id: authorID } = req.params;
  const author = await authorModel.findByIdAndUpdate(
    { _id: authorID },
    req.body
  );
  res.status(StatusCodes.OK).json({ success: true, data: author });
};

module.exports = { createAuthor, getAllAuthors, deleteAuthor, updateAuthor };
