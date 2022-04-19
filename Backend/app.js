// Importing the required modules
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const { AppError } = require("./utils/AppError");

const app = express();

app.use(morgan("dev"));

// Import Router
const { userRouter } = require("./routes/user.routes");
<<<<<<< HEAD
=======
const { postRouter } = require("./routes/post.routes");
>>>>>>> 0485d76d5ec94a48acd9d757dbc3a699d7e397d8

const { globalErrorHandler } = require("./middleware/error.middleware");

// Enable to receive JSON and Form-data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init Helmet
app.use(helmet());
app.use(cors());

app.use("/api/v1/user", userRouter);
<<<<<<< HEAD
=======
app.use("/api/v1/posts", postRouter);
>>>>>>> 0485d76d5ec94a48acd9d757dbc3a699d7e397d8

// Middleware for page that not found
app.use("*", (req, res, next) => {
  next(new AppError(404, `${req.originalUrl} not found in this server.`));
});

app.use(globalErrorHandler);

module.exports = app; // exporting the app to use in the server.js file
