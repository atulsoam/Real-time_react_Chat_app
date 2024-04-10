import mongoose from "mongoose";

const connectToMongoDb = async ()=>{
    try {
        await mongoose.connect(process.env.MongoDb_URI)
        console.log("Connected to mongo db");
    } catch (error) {
     console.log(error);   
    }
}

export default connectToMongoDb