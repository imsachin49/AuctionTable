const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
    bidderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bidAmount: {
        type: Number,
        required: true
    },
    bidingTime: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Bid", bidSchema);
