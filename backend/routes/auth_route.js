import express from "express" 
import {login, logout,singup} from "../controllers/auth_controller.js"
const router =  express.Router()

router.get("/login",login)
router.get("/singup",singup)
router.get("/logout",logout)




export default router