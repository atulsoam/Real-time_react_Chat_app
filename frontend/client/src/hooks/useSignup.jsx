import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/auth_context"

const useSingUp =  ()=>{
    const [loading,setLoading] = useState(false)
    const {authuser, setAuthuser} = useAuthContext()


    const signup = async ({fullname, username,password, confirmPassword,gender})=>{

        const succes = HandleInputError({fullname, username,password, confirmPassword,gender})
        if (!succes){
            return 
        }
        setLoading(true)
        try {

            const response = await fetch("/Api/auth/singup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullname, username,password, confirmPassword,gender})
            })
            if(response.ok){
                const data = await response.json()
                console.log(data)
                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthuser(data)
            }
            
        } catch (error) {
            toast.error(error.message)
            
        } finally{
            setLoading(false)
        }
    }
    return {loading,signup}

}
export default useSingUp

const HandleInputError = ({fullname, username,password, confirmPassword,gender})=>{

    if (!fullname || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fileds")
        return false
    }

    if (password !== confirmPassword){
        toast.error("Password didn't match")
        return false
    }

    if (password.length <6){
        toast.error("Password must be 6 or more character")
        return false
    }
    return true
    
}
