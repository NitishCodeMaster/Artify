const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas Connected");
    } catch (error) {
        console.error("🔴 Error connecting to database:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
