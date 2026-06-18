import mongoose from "mongoose";

const connectDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("mongodb connected!");
    }
    catch(err){
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    }
}
export default connectDb;