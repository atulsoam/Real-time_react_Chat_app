import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    senderID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    reciverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message :{
        type:String,
        required:true
    }

});

const Messages =  mongoose.model("Messages",MessageSchema)

export default Messages