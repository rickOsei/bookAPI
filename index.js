require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const cors = require("cors");

const routes = require("./routes/bookRoutes");

const server = express();

server.use(express.json());
server.use(cors());
server.use("/book", routes);
// server.use(express.static("./public"));

server.use(notFound);
server.use(errorHandler);

const port = process.env.PORT || 3000;
const start = () => {
  try {
    connectDB(process.env.MONGO_URI);
    server.listen(port, () =>
      console.log(`"Server is listening on port:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
