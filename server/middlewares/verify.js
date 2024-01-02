const {ApiError}=require('../utils/ApiError');
const {asyncHandler}=require('../utils/asyncHandler');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

const verifyToken=asyncHandler(async(req,res,next)=>{
    try {
        const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ", "")
        
        // console.log("token=",token);
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("decodedToken",decodedToken);
        const user = await User.findById(decodedToken?.id).select("-password");
        // console.log("user=",user);

        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
    
        req.user = user;
        next();
    } catch (error) {
        console.log("error while verifying token",error);
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})

module.exports={verifyToken};
