const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kishore8a03:SHARmila2616@vidhive.cv6jejw.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ DB Connected");
    } catch (err) {
        console.error("❌ DB Connection Error:", err);
    }
};

module.exports = { connectDB };
