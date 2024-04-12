import express from "express" 
import {login, logout,singup} from "../controllers/auth_controller.js"
const router =  express.Router()

router.post("/login",login)
router.post("/singup",singup)
router.post("/logout",logout)




export default router