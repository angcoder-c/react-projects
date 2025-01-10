import express from "express";
import { Server } from "socket.io";
import { createServer } from 'node:http'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
    cors : {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
})

io.on('connection', async (socket) => {
    console.log('usuario conectado')
    socket.on('disconnect', ()=>{
        console.log('usuario desconectado')
    })
})

app.get('/', (req, res)=>{
    res.send('<h1>App</h1>')
})

httpServer.listen(3000, 'localhost', ()=>{
    console.log('Server listen on port 3000')
})