import React, { useEffect, useState } from 'react'
import { chatSocket } from './sockets/chatSocket'
import getUsername from './service/getUsername'

function App() {
  const [messages, setMessages] = useState<string[]>([])

  useEffect(()=>{
    const configAuth = async () => {
      const localUsername = localStorage.getItem('username')
      const username = await getUsername({ username : localUsername })
      chatSocket.auth = {
        username : username
      }
      localStorage.setItem('username', username)
    }
    configAuth()

    const updateMessages = (msgs : string[]) => {
      setMessages(msgs)
    }
    chatSocket.on('messages', updateMessages)
    return  () => {
      chatSocket.off('messages', updateMessages)
    }
  }, [])
  
  const onChatMessage = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const message = formData.get('message')
    chatSocket.emit('chat-message', message)
    form.reset()
  }

  return (
    <div className='chat-container'>
      <div className='messages'>
        {messages.map((msg, index) =>(
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form className='new-message' onSubmit={onChatMessage}>
        <input type="text" name="message" placeholder='Sent a message'/>
        <button>Sent</button>
      </form>
    </div>
  )
}

export default App
