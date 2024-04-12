import { createContext, useContext, useState } from "react";



export const AuthContextprovider = ({children}) => {

    const [authuser, setAuthuser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)

    return <AuthContext.Provider value ={{authuser, setAuthuser}}>
        {children}
    </AuthContext.Provider>
}
export const AuthContext = createContext()

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}