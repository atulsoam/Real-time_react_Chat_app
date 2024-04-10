import express from "express"
import { sendMessage,GetMessages } from "../controllers/message_controller.js" 
import AuthMiddleWare from "../middleware/auth_middalware.js"
const router =  express.Router()

router.post("/send/:id",AuthMiddleWare,sendMessage)
router.get("/:id",AuthMiddleWare,GetMessages)




export default router