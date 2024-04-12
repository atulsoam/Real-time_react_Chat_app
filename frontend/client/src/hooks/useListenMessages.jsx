import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"
import notificationsound from "../assets/sounds/notification.mp3"

const useListenMessages = () => {

    const { socket } = useSocketContext()
    const {Message,setMessage} = useConversation()
    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldshake = true
            const sound = new Audio(notificationsound)
            sound.play()
            setMessage([...Message,newMessage])
        })
        return ()=> socket?.off("newMessage")
    },[socket,Message, setMessage])
}

export default useListenMessages