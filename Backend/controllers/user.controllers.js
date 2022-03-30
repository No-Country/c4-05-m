// Import Libraries
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const { storage } = require("../database/firebase");
// const { ref, uploadBytes, getDownloadURL } = require("firebase/storage");

// Import Utils
const { catchAsync } = require("../utils/catchAsync");
const { AppError } = require("../utils/AppError");

// Import Models
const User = require("../models/userModel");

// Login User
exports.loginUser = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const isPasswordValid = await bcrypt.compare(password, user.password);

  const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  if (!user || !isPasswordValid) {
    return next(new AppError(400, "Credentials are invalid"));
  }

  res.status(200).json({
    status: "success",
    data: {
      token
    }
  });
});

// Checking the validation of the token
exports.checkToken = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success"
  });
});

// Create default image picture
exports.createDefaultImage = catchAsync(async (req, res, next) => {
  const imgRef = ref(storage, `defaultImagePicture/${req.file.originalname}`);

  const result = await uploadBytes(imgRef, req.file.buffer);

  // PENDING CREATE MODEL TO SAVE THE INFORMATION
  const newImageDefault = await Image.create({
    img: result.metadata.fullPath
  });

  res.status(201).json({
    status: "success",
    data: {
      img: newImageDefault
    }
  });
});

// Select default image picture
exports.selectDefaultImage = catchAsync(async (req, res, next) => {
  // PENDING TO TEST ITS FUNCIONALITY
  const img = await Image.find({});
  console.log(typeof img);

  const imgsPromises = img.map(async ({ img }) => {
    const imgRef = ref(storage, img);

    const imgDownloadUrl = await getDownloadURL(imgRef);

    return { img: imgDownloadUrl };
  });

  const resolvedImg = await Promise.all(imgsPromises);

  res.status(200).json({
    status: "success",
    data: {
      img: resolvedImg
    }
  });
});

// END Select default image picture

const { Email } = require("../utils/email");

// Send email to reset the password
exports.sendEmailResetPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  // PENDING IMPORT THE MODEL
  const user = await User.findOne({ email });

  if (!user) {
    return next(new AppError(400, "Credentials are invalid"));
  }

  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });

  await new Email(email).sendResetPassword();

  res.status(204).json({
    status: "success",
    data: {
      token
    }
  });
});

// Create User

exports.createUser = catchAsync(async (req, res, next) => {
  const { firstName, lastName, username, email, password, passwordConfirm } = req.body;

  const user = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirm
  });

  res.status(201).json({
    status: "success",
    data: {
      user
    }
  });
});


// Reset the password
exports.resetPassword = catchAsync(async (req, res, next) => {
  const { password } = req.body;

  const { user } = req.resetPasswordUser;

  const salt = await bcrypt.genSalt(12);

  const hashedPassword = await bcrypt.hash(password, salt);

  const updateUser = await User.findByIdAndUpdate(user.username, {
    password: hashedPassword
  }).select("-password");

  res.status(204).json({
    status: "success",
    data: {
      updateUser
    }
  });
});

// END Send reset the password
// Get All Users
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    data: {
      users
    }
  });
});
