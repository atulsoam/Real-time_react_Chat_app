import { Server } from "socket.io";
import http from "http"
import express from "express"

const app = express()

const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }
})
const userSocketMAp = {}

export const getReceiverSocketId = (receiverid)=>{
    return userSocketMAp[receiverid]
}

io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    const UserID = socket.handshake.query.UserId
    console.log(UserID,20);

    if (UserID != "undefined"){
        userSocketMAp[UserID] = socket.id
    }
    io.emit("getOnlineUser",Object.keys(userSocketMAp))

    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);
        delete userSocketMAp[UserID]
        io.emit("getOnlineUser",Object.keys(userSocketMAp))

    })
})


export {app,io,server}