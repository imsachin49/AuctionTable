const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { sentOnMail } = require('../utils/sentOnMail');

// Function to generate a token
const generateToken = async (userId, expiresIn) => {
    if (!userId) {
        throw new ApiError(400, "UserId not Found...");
    }
    const user = await User.findById(userId);
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn });
    return token;
};

// register user..
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            throw new ApiError(400, "all fields are required");
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new ApiError(409, "User already Registered Please use differnt email or login");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            avatar: req.body.avatar
        })

        const createdUser = await User.findById(newUser._id).select("-password");

        if (!createdUser) {
            throw new ApiError(500, "Something went wrong while registering the user");
        }

        return res.status(201).json(new ApiResponse(200, createdUser, "User registered Successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Error while Registering User!!");
    }
});

// Login User.
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new ApiError(401, "Please Enter email and Password");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(400, "User Doesn't exist Please register");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            throw new ApiError(400, "Please Enter correct Credentials");
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const loggedInUser = await User.findById(user._id).select("-password");

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
        res.status(200).cookie("token", token, options).json(new ApiResponse(200, { user: loggedInUser, token }, "User Logged in Successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Error while Login");
    }
});

// update user details...
const updateUserDetails = asyncHandler(async (req, res) => {
    const { username, avatar, role } = req.body;
    const userId = req.user.id;

    try {
        if (!userId) {
            throw new ApiError(400, "User wasn't mentioned whose details to be updated");
        }

        // Create an object with the fields to update
        const updateFields = {};

        if (username) {
            updateFields.username = username;
        }
        if (avatar) {
            updateFields.avatar = avatar;
        }
        if (role) {
            updateFields.role = role;
        }

        // Use findByIdAndUpdate with the specific fields to update
        const updatedUser = await User.findByIdAndUpdate(userId, { $set: updateFields }, { new: true }).select("-password");
        res.status(201).json(new ApiResponse(200, updatedUser, "User profile updated successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Internal Server Error");
    }
});

// forget pwd. mail request!
const forgetPassword = asyncHandler(async (req, res) => {
    const { email } = req.body;

    try {
        if (!email) {
            throw new ApiError(401, "Please Enter your Email");
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw new ApiError(402, "No User Found !!");
        }

        const token = await generateToken(user._id, "30m");

        if (!token) {
            throw new ApiError(403, "Error in Generating token !!");
        }

        // make sure to add this frontend page in env maybe..
        const sender_email = process.env.SENDER_MAIL;
        const receiver_email = email;
        const mail_subject = `Your password reset Request!`;
        const link = `http://localhost:3000/user/forget-password/${user._id}/${token}`;
        const html_message = `<h1>Here is the link to change the password !! Click on the Link below the Change it!</h1><br/> <p>${link}</p>`

        const data = await sentOnMail(sender_email, receiver_email, mail_subject, html_message);
        res.status(200).json(new ApiResponse(201, data, "Password Reset Mail Sent Succefully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Error in Sending maill");
    }
});

// Reset Password
const resetPassword = asyncHandler(async (req, res) => {
    const { newPassword, confirmPassword } = req.body;
    const { id, token } = req.params;

    try {
        if (!newPassword || !confirmPassword) {
            throw new ApiError(401, "Please enter the password and confirm password");
        }

        if (newPassword !== confirmPassword) {
            throw new ApiError(402, "Password and confirm password don't match");
        }

        if (!id || !token) {
            throw new ApiError(403, "All fields are required");
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verify);

        if (!verify || !verify.id) {
            throw new ApiError(404, "Invalid or expired password reset link");
        }

        const user = await User.findById(id);

        if (!user) {
            throw new ApiError(405, "User doesn't exist");
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const updatedUser = await User.findByIdAndUpdate(user._id, { $set: { password: hashedPassword } }, { new: true }).select("-password");

        if (!updatedUser) {
            throw new ApiError(405, "Error while updating user password");
        }

        // Send success email...
        const sender_email = process.env.SENDER_MAIL;
        const receiver_email = user.email;
        const mail_subject = `Password Changed Successfully!`;
        const html_message = `<h2>Your Password Changed Successfully!</h2>`

        await sentOnMail(sender_email, receiver_email, mail_subject, html_message);

        res.status(200).json(new ApiResponse(201, updatedUser, "User password updated successfully"));
    } catch (error) {
        throw new ApiError(500, error.message || "Error while updating the password");
    }
});

// get all users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find({}).select("-password");
    res.status(200).json(new ApiResponse(200, users, "All Users"));
});

module.exports = { registerUser, loginUser, updateUserDetails, forgetPassword, resetPassword,getAllUsers};
