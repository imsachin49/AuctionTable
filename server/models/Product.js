const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    startPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed'],
        default: 'open'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema);
