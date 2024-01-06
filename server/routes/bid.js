const express=require('express');
const router=express.Router();
const {verifyToken}=require('../middlewares/verify')

// Place a bid.
router.post('/register',registerUser);

module.exports=router;
