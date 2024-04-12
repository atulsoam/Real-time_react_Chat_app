import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast"

const useSendMessage = ()=>{

    const [loading,setloading]= useState(false);
    const {Message,setMessage,selectedConversation} = useConversation();

    const sendmessage = async (message)=>{
        setloading(true)
        try {
            console.log(message);
            const res = await fetch(`Api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({message})
            })
            const data = await res.json()
            setMessage([...Message,data])

        } catch (error) {
            console.log(error)
            // toast.error(error.message)

        }finally{
            setloading(false)
        }

    }
    return {sendmessage, loading}

}

export default useSendMessage;