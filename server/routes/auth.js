const express=require('express');
const router=express.Router();
const {authUser,registerUser,loginUser,updateUserDetails,forgetPassword,resetPassword,getAllUsers}=require('../controllers/auth');
const {verifyToken}=require('../middlewares/verify')

// Register user
router.post('/register',registerUser);

// Login User
router.post('/login',loginUser);

// oAuthUser
router.post('/oauth',authUser);

// Update User..
router.patch('/',verifyToken,updateUserDetails); 

// Forget Password
router.post('/forget-password',forgetPassword);

// Reset Password
router.post('/reset-password/:id/:token',resetPassword);

// get all users
router.get('/all',getAllUsers);

module.exports=router;
