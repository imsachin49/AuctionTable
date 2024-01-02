const mongoose = require('mongoose');

async function connectDB() {
    try {
        const connectionInstance=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to the DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}

module.exports = { connectDB };
