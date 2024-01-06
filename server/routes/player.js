const express=require('express');
const router=express.Router();
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndseller}=require('../middlewares/verify');
const {addNewPlayer,deletePlayer,getAllPlayers,updatePlayer,searchPlayer,getPlayerById}=require('../controllers/player');

// Create a Player..
router.post('/',verifyTokenAndseller,addNewPlayer);

// delete a Player..
router.delete('/:id',verifyTokenAndseller,deletePlayer);

// get all Players..
router.get('/',verifyTokenAndAdmin,getAllPlayers);

// update a Player..
router.patch('/:id',verifyTokenAndseller,updatePlayer);

// find player by id
router.get('/:id',getPlayerById);

// search a player
router.get('/search/all',searchPlayer);

module.exports=router;
