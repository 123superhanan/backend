import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    const URL = process.env.MONGODB_ID;

    try {
        console.log("Connecting to database...");
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database connection established successfully");

    } catch (error) {
        console.log("Error occurred while connecting to the database:", error);
    }
}

export default connection;
