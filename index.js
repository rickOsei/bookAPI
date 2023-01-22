const express = require("express");
const connectDB = require("./db/connect");
const routes = require("./routes/bookRoutes");
require("dotenv").config();

const server = express();

server.use(express.json());
server.use("/book", routes);

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
