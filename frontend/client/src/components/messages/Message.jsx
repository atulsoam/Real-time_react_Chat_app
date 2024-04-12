// import { useAuthContext } from "../context/AuthContext";
// import { extractTime } from "../utils/extractTime";
// import useConversation from "../zustand/useConversation";

import { useEffect } from "react";
import { useAuthContext } from "../../context/auth_context";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Messagerender = ({ messsage }) => {

	const { authuser } = useAuthContext()
	const { selectedConversation } = useConversation()
	const fromMe = messsage.newMessage? messsage.newMessage.senderID === authuser._id: messsage.senderID === authuser._id
	// console.log("from-->", fromMe);
	const formatedtime = extractTime(messsage.newMessage? messsage.newMessage.createdAt: messsage.createdAt)
	const profile_pic = fromMe ? authuser.profilePic : selectedConversation.profilePic
	const msgbgcolor = fromMe ? 'bg-blue-500' : ""
	const shouldshake= messsage.shouldshake ? "shake":""
	const chatClassName = fromMe ? 'chat-end' : 'chat-start'

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img src={profile_pic}
						alt='Tailwind CSS chat bubble component' />
				</div>
			</div>
			<div className={`chat-bubble text-white pb-2 ${msgbgcolor} ${shouldshake}`}>{messsage.newMessage? messsage.newMessage.message :messsage.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatedtime}</div>
		</div>
	);
};
export default Messagerender;
