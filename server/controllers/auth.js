const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { sentOnMail } = require('../utils/sentOnMail');
require('dotenv').config();

// oAuthUser
const authUser = asyncHandler(async (req, res) => {
    const { username, email, provider, providerId, avatar } = req.body;

    try {
        const user = await User.findOne({ email });
        // if user existed and trying to login then send token
        if (!user) {
            const newUser = new User({
                username,
                email,
                provider,
                providerId,
                avatar
            });
            await newUser.save();
            const payload = {
                user: {
                    id: newUser._id
                }
            };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
                if (err) new ApiError(500, "Error while generating token");
                console.log("token=>", token);
                res.status(200).json(new ApiResponse(200, { token }, "User Logged in Successfully"));
            });
        } else {
            const payload = {
                user: {
                    id: user._id
                }
            };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' }, (err, token) => {
                if (err) new ApiError(500, "Error while generating token");
                console.log("token=>", token);
                res.status(200).json(new ApiResponse(200, { token }, "User Logged in Successfully"));
            });
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// change user role.
const changeUserRole=asyncHandler(async(req,res)=>{
    const {userId,role}=req.body;
    if(!userId){
        throw new ApiError(400,"User id is required");
    }
    if(!role){
        throw new ApiError(400,"Role is required");
    }
    
    if(role!=="admin" && role!=="seller"){
        throw new ApiError(400,"Role must be admin or seller");
    }

    try{
        const user=await User.findById(userId);
        if(!user){
            throw new ApiError(404,"User not found");
        }
        user.role=role;
        await user.save();
        res.status(200).json(new ApiResponse(200,user,"User role updated successfully"));
    }catch(error){
        throw new ApiError(500,error.message || "Internal Server Error");
    }
});

const getAllUsers=asyncHandler(async(req,res)=>{
    const users=await User.find();
    res.status(200).json(new ApiResponse(200,users,"All users fetched successfully"));
});

module.exports = {authUser,changeUserRole,getAllUsers};