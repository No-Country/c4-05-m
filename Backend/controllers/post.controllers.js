// Import Utils
const { AppError } = require("../utils/AppError");
const { catchAsync } = require("../utils/catchAsync");
const { filterObj } = require("../utils/filterObj");

exports.updatePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const data = filterObj(req.body, "title", "content");

  // It's pending to import the model
  const postUpdate = await Post.findByIdAndUpdate(id, { ...data });

  if (!postUpdate) {
    return next(new AppError(404, "I cant find the post with the given ID"));
  }

  res.status(201).json({
    status: "success",
    data: {
      postUpdate
    }
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  // It's pending to import the model
  // This is a soft delete technical
  const postUpdate = await Post.findByIdAndUpdate(id, { active: false });

  if (!postUpdate) {
    return next(new AppError(404, "I cant find the post with the given ID"));
  }

  res.status(204).json({
    status: "success"
  });
});
