import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/auth_context"

const useLogin =  ()=>{
    const [loading,setLoading] = useState(false)
    const {authuser, setAuthuser} = useAuthContext()


    const login = async ({username,password})=>{

        const succes = HandleInputError({ username,password})
        if (!succes){
            return 
        }
        setLoading(true)
        try {
            const response = await fetch("/Api/auth/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})
            })
            const data = await response.json()
            if(response.ok){
                console.log(data)
                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthuser(data)
            }
            if (data.error){
                throw new Error(data.error)
            }            
        } catch (error) {
            toast.error(error.message)
            
        } finally{
            setLoading(false)
        }
    }
    return {loading,login}

}
export default useLogin

const HandleInputError = ({ username,password})=>{

    if (!username || !password ){
        toast.error("Please fill all the fileds")
        return false
    }
    if (password.length <6){
        toast.error("Password must be 6 or more character")
        return false
    }
    return true
    
}
