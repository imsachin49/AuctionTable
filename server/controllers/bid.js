const { asyncHandler } = require('../utils/asyncHandler');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const User = require('../models/User');
const Player = require('../models/Player');
const Bid = require('../models/Bid');
const { convertTimeToTimestamp, convertTimeStampToTime } = require('../utils/timeConversions');

const createNewBid = asyncHandler(async (req, res) => {
    const { playerId, bidAmount } = req.body;
    const bidderId = req.user.id;
    
    try {
        if (!playerId || !bidAmount) {
            throw new ApiError(400, 'All fields are required');
        }
        const player = await Player.findById(playerId);
        if (!player) {
            throw new ApiError(404, 'Player not found');
        }

        const user = await User.findById(bidderId);
        if (!user) {
            throw new ApiError(404, 'User not found');
        }
        // check if the biding amount is greater than the start price as well as the previous bid amount
        if (bidAmount < player.startPrice) {
            throw new ApiError(400, 'Bid amount should be greater than the start price');
        }

        // find the bids on a player and sort them in descending order of bid amount
        const bids = await Bid.find({ playerId }).sort({ bidAmount: -1 });
        if (bids.length > 0 && bids[0].bidAmount >= bidAmount) {
            throw new ApiError(400, 'Bid amount should be greater than the previous bid amount');
        }

        // check if the user has enough balance to place the bid
        if (user.balance < bidAmount) {
            throw new ApiError(400, 'Insufficient balance');
        }
        // its admin's duty to postpone/prepone the end time if demand is high or low
        const bidingTime=new Date().getTime();
        if (bidingTime > player.endTime) {
            throw new ApiError(400, 'Bidding time should be before the end time');
        }
        const bid = await Bid.create({
            bidderId,
            playerId,
            bidAmount,
            bidingTime
        });
        // add the bidId to the Player's bids array
        await Player.findByIdAndUpdate(playerId, { $push: { bids: bid._id } });
        res.status(201).json(new ApiResponse(201, bid, 'Bid added successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// update a bid
const updateBid = asyncHandler(async (req, res) => {
    const { bidId} = req.params;
    const { bidAmount } = req.body;
    try {
        const updatedBid=await Bid.findByIdAndUpdate(bidId, { bidAmount }); // this updated bit will reflect in the bids array of the player
        res.status(200).json(new ApiResponse(200, updatedBid, 'Bid updated successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// delete a bid
const deleteBid = asyncHandler(async (req, res) => {
    const { bidId,playerId } = req.params;
    try {
        const deletedBid=await Bid.findByIdAndDelete(bidId);
        await Player.findByIdAndUpdate(playerId, { $pull: { bids: bidId } });
        res.status(200).json(new ApiResponse(200, deletedBid, 'Bid deleted successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// get all bids on a player
const getAllBidsOnPlayer = asyncHandler(async (req, res) => {
    const { playerId } = req.params;
    try {
        const bids = await Bid.find({ playerId }).populate('bidderId','-password');
        res.status(200).json(new ApiResponse(200, bids, 'Bids fetched successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// get all bids by a user
const getAllBidsByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;
    try {
        const bids = await Bid.find({ bidderId: userId }).populate('playerId');
        res.status(200).json(new ApiResponse(200, bids, 'Bids fetched successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// get all bids by a user on a player
const getAllBidsByUserOnPlayer = asyncHandler(async (req, res) => {
    const { userId, playerId } = req.params;
    try {
        const bids = await Bid.find({ bidderId: userId, playerId }).populate('playerId');
        res.status(200).json(new ApiResponse(200, bids, 'Bids fetched successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// get all bids
const getAllBids = asyncHandler(async (req, res) => {
    try {
        const bids = await Bid.find().populate('playerId').populate('bidderId','-password');
        res.status(200).json(new ApiResponse(200, bids, 'Bids fetched successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

// get winning bid on a player
const getWinningBidOnPlayer = asyncHandler(async (req, res) => {
    const { playerId } = req.params;
    try {
        const player = await Player.findById(playerId);
        if (!player) {
            throw new ApiError(404, 'Player not found');
        }
        const bids = await Bid.find({ playerId }).sort({ bidAmount: -1 }).limit(1).populate('bidderId','-password');
        // check if the player is sold or not
        res.status(200).json(new ApiResponse(200, bids, 'Bids fetched successfully'));
    } catch (error) {
        throw new ApiError(500, error.message || 'Internal server error');
    }
});

module.exports = {
    createNewBid,
    updateBid,
    deleteBid,
    getAllBidsOnPlayer,
    getAllBidsByUser,
    getAllBids,
    getAllBidsByUserOnPlayer,
    getWinningBidOnPlayer
};
