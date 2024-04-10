import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
    participantes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    Messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",
            default: []
        }
    ]

}, { timestamps: true });

const Conversation =  mongoose.model("Conversation", ConversationSchema)

export default Conversation