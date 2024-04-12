import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ currentconversation, emoji, lastindx }) => {
	const { selectedConversation, setSelectedConversation } = useConversation()

	const IsSelected = selectedConversation?._id === currentconversation._id

	const { onlineUser } = useSocketContext()
	const isOnline = onlineUser.includes(currentconversation?._id)
	// console.log(onlineUser, 11);
	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${IsSelected ? "bg-sky-500" : ""}`}
				onClick={() => setSelectedConversation(currentconversation)}
			>
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full'>
						<img

							src={currentconversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-gray-200'>{currentconversation.fullname}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastindx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;
