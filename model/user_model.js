const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name"],
  },
  email: {
    type: String,
    required: [true, "Please add eamil"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add password"],
  },
});

module.exports = mongoose.model("User", userSchema);
