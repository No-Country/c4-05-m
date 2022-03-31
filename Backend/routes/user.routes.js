// Express

const express = require("express");

const router = express.Router();

// Controllers

const {
  loginUser,
  checkToken,
  createDefaultImage,
  selectDefaultImage,
  sendEmailResetPassword,
  resetPassword,
  createUser,
  getAllUsers
} = require("../controllers/user.controllers");

// Middleware

const {
  validateSession,
  validateResetPassword
} = require("../middleware/auth.middleware");

// Utils

const { upload } = require("../utils/multer");

// Routes

router.post("/user", upload.single("userImg"), createUser);

router.post("/login", loginUser);

router.post("/send-reset-password", sendEmailResetPassword);

router.post("/reset-password", validateResetPassword, resetPassword);

router
  .route("/img")
  .post(upload.single("userDefaultImg"), createDefaultImage)
  .get(selectDefaultImage);

router.use(validateSession);

router.get("/user", getAllUsers);

router.get("/check-token", checkToken);

module.exports = { userRouter: router };
