const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DataBase");
    } catch (e) {
        console.log("Error while connecting to DataBase", e);
    }
}

module.exports = connectDB;
