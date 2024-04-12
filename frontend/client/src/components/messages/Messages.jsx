// import { useEffect, useRef } from "react";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
// 	const { messages, loading } = useGetMessages();
// 	useListenMessages();
// 	const lastMessageRef = useRef();

// 	useEffect(() => {
// 		setTimeout(() => {
// 			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
// 		}, 100);
// 	}, [messages]);

// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			{!loading &&
// 				messages.length > 0 &&
// 				messages.map((message) => (
// 					<div key={message._id} ref={lastMessageRef}>
// 						<Message message={message} />
// 					</div>
// 				))}

// 			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
// 			{!loading && messages.length === 0 && (
// 				<p className='text-center'>Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };
// export default Messages;

// STARTER CODE SNIPPET
import useGetMessages from "../../hooks/useGetMessages";
import Messagerender from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { Message, laoding } = useGetMessages()
	useListenMessages()
	const lastmsgref = useRef()
	useEffect(()=>{
		setTimeout(() => {
			lastmsgref.current?.scrollIntoView({behavior:"smooth"})
		}, 100);

	},[Message])
	return (
		<div className='px-4 flex-1 overflow-auto'>

			{!laoding && Message.length > 0 && Message.map((msg) => {
				return (
					<div key={msg._id} ref={lastmsgref}>
					<Messagerender  messsage={msg} />
					</div>
				)
			})}
			{laoding && [...Array(6)].map((content, idx) => <MessageSkeleton key={idx} />)}
			{!laoding && Message.length === 0 && (
				<p className="text-center">Send a message to start the conversation</p>
			)
			}
		</div>
	);
};
export default Messages;
