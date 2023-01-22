const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = (url) => {
  return mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log("Connected to database")
  );
};

module.exports = connectDB;
