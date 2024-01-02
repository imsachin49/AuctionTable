const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'user'],
        default: 'user',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);