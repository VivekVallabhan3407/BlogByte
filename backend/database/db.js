import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);  // <-- add this line
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error", error);
  }
};


export default connectDB;