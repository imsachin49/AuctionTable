const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
require('dotenv').config();

const verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.user.id).select("-password");

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Invalid access token");
  }
});

const verifyTokenAndAdmin = asyncHandler(async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      throw new ApiError(403, "You are not allowed to do that!");
    }
  });
});

const verifyTokenAndSeller = asyncHandler(async (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "seller" || req.user.role === "admin") {
      next();
    } else {
      throw new ApiError(403, "You are not allowed to do that!");
    }
  });
});

module.exports = { verifyToken, verifyTokenAndAdmin, verifyTokenAndSeller };
