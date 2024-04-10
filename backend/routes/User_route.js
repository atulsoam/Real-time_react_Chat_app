import express from "express"
import AuthMiddleWare from "../middleware/auth_middalware.js"
import { GetUserForSideBar } from "../controllers/Users.controllers.js"
const router =  express.Router()

router.get("/",AuthMiddleWare,GetUserForSideBar)




export default router