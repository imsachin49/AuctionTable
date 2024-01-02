const express=require('express');
const router=express.Router();
const {registerUser,loginUser,updateUserDetails,forgetPassword,resetPassword}=require('../controllers/auth');
const {verifyToken}=require('../middlewares/verify')

// Register user
router.post('/register',registerUser);

// Login User
router.post('/login',loginUser);

// Update User..
router.patch('/',verifyToken,updateUserDetails); 

// Forget Password
router.post('/forget-password',forgetPassword);

// Reset Password
router.post('/reset-password/:id/:token',resetPassword);

module.exports=router;
