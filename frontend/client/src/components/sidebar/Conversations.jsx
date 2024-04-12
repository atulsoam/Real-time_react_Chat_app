
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"

const Conversations = () => {
	const { loading, conversation } = useGetConversation()
	return (

		<div className='py-2 flex flex-col overflow-auto'>
			{
				conversation.map((conversations, idx) => {
					return (
						<Conversation
							key={conversations._id}
							currentconversation={conversations}
							emoji={getRandomEmoji()}
							lastindx={idx === conversations.length - 1}
						/>
					)
				})

			}


			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;
