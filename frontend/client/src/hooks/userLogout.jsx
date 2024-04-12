import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/auth_context"

const useLogout =  ()=>{
    const [loading,setLoading] = useState(false)
    const {authuser, setAuthuser} = useAuthContext()


    const Logout = async ()=>{
        
        setLoading(true)
        try {

            const response = await fetch("/Api/auth/logout",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
            })
            if(response.ok){
                const data = await response.json()
                console.log(data)
                localStorage.removeItem("chat-user")
                setAuthuser(null)
            }
            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }
    }
    return {loading,Logout}

}
export default useLogout


