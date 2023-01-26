const jwt = require("jsonwebtoken");
const userModel = require("../model/user_model");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await userModel.create(req.body);

  const token = jwt.sign(
    { id: user._id, name, email },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  res.status(StatusCodes.CREATED).json({ msg: "Created", token });
};

module.exports = login;
