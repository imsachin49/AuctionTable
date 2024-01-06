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
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'finished'],
        default: 'upcoming'
    },
    winnerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bids:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bid'
        }
    ]
},
    { timestamps: true }
)

module.exports = mongoose.model("Player", playerSchema);
