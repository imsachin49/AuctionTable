// services/bidService.js

const mongoose = require('mongoose');
const Player = require('../models/Player');
const User = require('../models/User');
const { ObjectId } = mongoose.Types;

const placeBid = async (socket, data, io) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    let transactionCommitted = false;

    try {
        if (!data || !data.productId || !data.currentPrice) {
            console.log('Please provide all data: productId, currentPrice');
            socket.emit('bidRejected', { message: 'Please provide all data: productId, currentPrice' });
            await session.abortTransaction();
            session.endSession();
            return;
        }

        const player = await Player.findById(data.productId).session(session);
        if (!player) {
            console.log('Product not found.');
            socket.emit('bidRejected', { message: 'Product not found.' });
            await session.abortTransaction();
            session.endSession();
            return;
        }

        if (player.endTime < new Date().getTime()) {
            console.log('Bidding time is over.');
            socket.emit('bidRejected', { message: 'Bidding time is over.' });
            await session.abortTransaction();
            session.endSession();
            return;
        }

        if (data.currentPrice <= player.currentPrice) {
            console.log('Bid must be higher than the current highest bid.');
            socket.emit('bidRejected', { message: 'Bid must be higher than the current highest bid.' });
            await session.abortTransaction();
            session.endSession();
            return;
        }

        const userId = new ObjectId(socket.user._id); // Ensure userId is an ObjectId
        const user = await User.findById(userId).session(session);
        if (!user) {
            console.log('User not found.');
            socket.emit('bidRejected', { message: 'User not found.' });
            await session.abortTransaction();
            session.endSession();
            return;
        }

        console.log(`Adding bid: userId=${userId}, currentPrice=${data.currentPrice}`);

        // Ensure all bidderId values in bids are ObjectIds
        for (let bid of player.bids) {
            if (!(bid.bidderId instanceof ObjectId)) {
                bid.bidderId = new ObjectId(bid.bidderId);
            }
        }

        player.bids.push({
            bidderId: userId,
            bidAmount: data.currentPrice,
            biddingTime: new Date().getTime()
        });
        player.currentPrice = data.currentPrice;
        await player.save();

        await session.commitTransaction();
        transactionCommitted = true; // Mark the transaction as committed
        session.endSession();

        io.emit('bidPlaced', {
            message: `A Bid of ${data.currentPrice} has been placed by ${socket.user.username}`,
            data: {
                productId: player._id,
                currentPrice: player.currentPrice,
                bidderId: userId,
            }
        });
        console.log('Bid placed successfully.');
    } catch (error) {
        if (!transactionCommitted) {
            await session.abortTransaction();
        }
        session.endSession();
        console.error('Error placing bid:', error);
    }
};

module.exports = { placeBid };