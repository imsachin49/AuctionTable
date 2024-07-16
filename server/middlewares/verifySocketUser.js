const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
require('dotenv').config();

const verifySocketUser = asyncHandler(async (socket, next) => {
    try {
        const token = socket.handshake.auth.token;
        console.log("tokennn",token)
        if (!token) {
            throw new ApiError(401, 'Unauthorized request');
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.user.id).select('-password');
        if (!user) {
            throw new Error('Invalid access token');
        }
        console.log("Userrrrrrrrrrrrrrrrrrrrrrrrrr...................")
        socket.user = user;
        next();
    } catch (error) {
        next(new ApiError(401,'Authentication error'));
        throw new ApiError(401, error.message || 'Invalid access token');
    }
});

module.exports = { verifySocketUser };