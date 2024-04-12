
import useGetMessages from "../../hooks/useGetMessages";
import Messagerender from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { Message, laoding,setMessage } = useGetMessages()
	useListenMessages()
	const lastmsgref = useRef()
	useEffect(() => {
		setTimeout(() => {
			lastmsgref.current?.scrollIntoView({ behavior: "smooth" })
		}, 100);

	}, [Message,setMessage])
	console.log(Message, 18);
	return (
		<div className='px-4 flex-1 overflow-auto'>

			{!laoding &&
				Message.length > 0 &&
				Message.map((msg) => {
					return (
						<div key={msg._id} ref={lastmsgref}>
							<Messagerender messsage={msg} />
						</div>
					)
				})}
			{laoding && [...Array(6)].map((content, idx) => <MessageSkeleton key={idx} />)}
			{!laoding && (Message.length === undefined || Message.length === 0) && (
				<p className="text-center">Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;
