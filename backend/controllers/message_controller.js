import Conversation from "../modules/conversation_module.js";
import Messages from "../modules/Message_module.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const ReceiverId = req.params.id
        const SenderId = req.user._id

        let conversation = await Conversation.findOne({
            participantes: { $all: [SenderId, ReceiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({ participantes: [SenderId, ReceiverId] })
        }

        const newMessage = new Messages({
            senderID: SenderId,
            reciverID: ReceiverId,
            message: message
        })

        if (newMessage) {
            conversation.Messages.push(newMessage._id)
        }
        await conversation.save()
        await newMessage.save()
        return res.status(201).json({ newMessage })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error })
    }
}

export const GetMessages = async (req, res) => {
    try {
        const UserToChat = req.params.id
        const Senderid =  req.user._id
        const conversation = await Conversation.findOne({
            participantes: { $all: [Senderid, UserToChat] }
        }).populate("Messages")

        return res.status(200).json(conversation.Messages)

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error })
    }
}