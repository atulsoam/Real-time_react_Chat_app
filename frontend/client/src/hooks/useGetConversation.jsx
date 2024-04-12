import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"


function useGetConversation() {
  const [loading, setloading] = useState(false)
  const [conversation, setConversation] = useState([])
   useEffect(()=>{
    const getConversation = async()=>{
        setloading(true)
        try {
            const res =  await fetch("/Api/users/")
            const data = await res.json()
            if (data.error){
                throw new Error(data.error)
            }
            setConversation(data)
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        } finally{
            setloading(false)
        }
    }
    getConversation()
   },[])
   return {loading, conversation,setConversation}
}

export default useGetConversation