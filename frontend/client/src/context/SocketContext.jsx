import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client"
import { useAuthContext } from "../context/auth_context"

export const Socketcontex = createContext();
export const useSocketContext = ()=>{
    return useContext(Socketcontex)
}

export const SocketcontextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const { authuser } = useAuthContext()
    useEffect(() => {
        if (authuser) {
            const socket = io("http://localhost:5000", {
                query:{
                    UserId: authuser._id
                }
            })
            setSocket(socket)

            socket.on("getOnlineUser",(users)=>{
                setOnlineUser(users)
            })
            return () => socket.close()
        }
        else {
            socket?.close()
            setSocket(null)

        }
    }, [authuser])
    return <Socketcontex.Provider value={{ socket, onlineUser }}>
        {children}
    </Socketcontex.Provider>
}