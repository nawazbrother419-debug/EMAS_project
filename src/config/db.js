import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoAltas Connected");
    } catch (error) {
        throw error;        
    }
}


export default connectDB;

