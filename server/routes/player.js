const express=require('express');
const router=express.Router();
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndSeller}=require('../middlewares/verify');
const {addNewPlayer,deletePlayer,getAllPlayers,updatePlayer,searchPlayer,getPlayerById}=require('../controllers/player');

// Create a Player..
router.post('/',verifyTokenAndSeller,addNewPlayer);

// delete a Player..
router.delete('/:id',verifyTokenAndSeller,deletePlayer);

// get all Players..
router.get('/',getAllPlayers);

// update a Player..
router.patch('/:id',updatePlayer);

// find player by id
router.get('/:id',getPlayerById);

// search a player
router.get('/search/all',searchPlayer);

module.exports=router;
