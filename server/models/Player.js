const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        // required: true
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startTime: {
        type: Number, // Number for Unix timestamps
        required: true
    },
    endTime: {
        type: Number, // Number for Unix timestamps
        required: true
    },
    startPrice: {
        type: Number,
        required: true
    },
    currentPrice: {
        type: Number,
        required: true,
        default: function () {
            return this.startPrice;
        }
    },
    winnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bids: [
        {
            bidderId: {
                // type: mongoose.Schema.Types.ObjectId,
                type: String,
                ref: 'User'
            },
            bidAmount: {
                type: Number,
                required: true
            },
            biddingTime: {
                type: Number,
                required: true
            }
        }
    ]
},
    { timestamps: true }
)

module.exports = mongoose.model("Player", playerSchema);
