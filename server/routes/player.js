const express=require('express');
const router=express.Router();
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndSeller}=require('../middlewares/verify');
const {addNewPlayer,deletePlayer,getAllPlayers,updatePlayer,searchPlayer,getPlayerById,getAllBidsOfPlayer,getTopXOngoingPlayers,insertMultiplePlayers,addPictureaToAllPlayers}=require('../controllers/player');

// Create a Player..
router.post('/',verifyTokenAndSeller,addNewPlayer);

// delete a Player..
router.delete('/:id',verifyTokenAndSeller,deletePlayer);

// get all Players..
router.get('/',getAllPlayers);

// update a Player..
router.patch('/:id',verifyTokenAndSeller,updatePlayer);

// find player by id
router.get('/:id',getPlayerById);

// search players
router.get('/search/all',searchPlayer);

// get all bids of a player
router.get('/:id/bids',getAllBidsOfPlayer);

// get top x ongoing players
router.get('/top/ongoing',getTopXOngoingPlayers);

// insert multiple players
router.post('/insert/multiple',verifyTokenAndSeller,insertMultiplePlayers);

// add pictures to all players
router.post('/add/pictures',addPictureaToAllPlayers);

module.exports=router;