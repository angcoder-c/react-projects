import { io } from "socket.io-client";
import getUsername from "../service/getUsername";

const URL = 'http://localhost:3000'

export const chatSocket = io(URL, {
    autoConnect : true
})