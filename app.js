const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const authRouter = require("./routers/auth");
const booksRouter = require("./routers/booksRouter");

const runServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(morgan("combined"));
  app.use(cors());

  app.use("/auth", authRouter);
  app.use("/api/books", booksRouter);

  try {
    await mongoose.connect(process.env.MONGO_URL);

    app.listen(process.env.PORT, () => {
      console.log(`Locked and loaded on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

runServer();
