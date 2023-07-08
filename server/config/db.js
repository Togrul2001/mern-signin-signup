const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        mongoose.connection
        console.log("database-e baglandi");
    } catch (error) {
        console.log("db error", error);
    }
}

module.exports = connectDB