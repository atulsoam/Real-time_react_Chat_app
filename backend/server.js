import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectToMongoDb from "./db/connectMongoDb.js"
import AuthRoute from "./routes/auth_route.js"
import messageRoute from "./routes/messages_routes.js"
import User_routes from "./routes/User_route.js"
import { app,server } from "./socket/socket.js"
dotenv.config()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())
app.use("/Api/auth/",AuthRoute)
app.use("/Api/messages",messageRoute)
app.use("/Api/users",User_routes)


server.listen(PORT, ()=>{
    connectToMongoDb()
    console.log("Server is listining at", PORT)
})