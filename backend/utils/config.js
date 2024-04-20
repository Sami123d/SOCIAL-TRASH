import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

// Ye code documentationse uthana hai
export const dbConnection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
