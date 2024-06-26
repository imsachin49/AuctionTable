const express=require('express');
const router=express.Router();
const {authUser,changeUserRole,getAllUsers}=require('../controllers/auth');
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndSeller}=require('../middlewares/verify')

// oAuthUser
router.post('/oauth',authUser);

// change user role
router.post('/changeRole',verifyTokenAndAdmin,changeUserRole);

// get all users
router.get('/allUsers',getAllUsers);

module.exports=router;