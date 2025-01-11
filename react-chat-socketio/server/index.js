import express from "express";
import { Server } from "socket.io";
import { createServer } from 'node:http'

const MESSAGES = []
const app = express()
const httpServer = createServer(app) 
const io = new Server(httpServer, {
    cors : {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on('connection', async (socket) => {
    console.log('user connected')

    socket.on('chat-message', (msg)=>{
        const username = socket.handshake.auth.username
        MESSAGES.push(`${username}: ${msg}`)
        MESSAGES.reverse()
        io.emit('messages', MESSAGES)
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})

httpServer.listen(3000, 'localhost', ()=>{
    console.log('Server listen on port 3000')
})