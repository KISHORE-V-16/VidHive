// config/db.js
const mongoose = require('mongoose');

let isConnected = false; // Global connection cache

const connectDB = async () => {
    if (isConnected) {
        console.log("🔄 Using existing database connection");
        return;
    }

    try {
        const db = await mongoose.connect('mongodb+srv://kishore8a03:SHARmila2616@vidhive.cv6jejw.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        isConnected = db.connections[0].readyState; // 1 means connected
        console.log("✅ DB Connected");
    } catch (err) {
        console.error("❌ DB Connection Error:", err);
    }
};

module.exports = { connectDB };
