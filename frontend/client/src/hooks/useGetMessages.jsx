import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"


const useGetMessages = () => {
    const [laoding, setLoading] = useState(false)
    const { Message, setMessage, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const response = await fetch(`/Api/messages/${selectedConversation._id}`)
                const data = await response.json()
                if (data.error) {
                    throw new Error(data.error)
                }
                setMessage(data)
            } catch (error) {
                toast.error(error.message)
                console.log(error);

            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessages()
        
    }, [selectedConversation?._id, setMessage])

    return { Message, laoding,setMessage }
}

export default useGetMessages