const express=require('express');
const router=express.Router();
// const {verifyToken,verifyTokenAndAdmin,verifyTokenAndSeller}=require('../middlewares/verify');
// const {
//     createNewBid,
//     updateBid,
//     deleteBid,
//     getAllBidsOnPlayer,
//     getAllBidsByUser,
//     getAllBidsByUserOnPlayer,
//     getAllBids,
//     getWinningBidOnPlayer
// }=require('../controllers/bid');

// // Place a bid.
// router.post('/',verifyToken,createNewBid);

// // update a bid.
// router.patch('/:bidId',verifyToken,updateBid);

// // delete a bid
// router.delete('/:bidId/:playerId',verifyToken,deleteBid);

// // get all bids on a player
// router.get('/player/:playerId',getAllBidsOnPlayer);

// // get all bids by a user
// router.get('/user/:userId',getAllBidsByUser);

// // get all bids by a user on a player
// router.get('/user/:userId/player/:playerId',getAllBidsByUserOnPlayer);

// // get all bids
// router.get('/',getAllBids);

// // get winning bid on a player
// router.get('/player/:playerId/winning',getWinningBidOnPlayer);

module.exports=router;
