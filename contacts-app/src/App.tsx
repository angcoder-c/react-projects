import './App.css'
import useComments from './hooks/useComments'
import { useAppSelector } from './hooks/store'
import React from 'react'

function App() {
  const { addComment } = useComments()
  const comments = useAppSelector((state) => state.comments)
  const handleNewComment = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const username = formData.get('username') as string
    const message = formData.get('message') as string

    if (!username && !message) return

    addComment({ username, message })
    form.reset()
  }
  
  return (
    <>
      <h1>
        Comment on the painting
      </h1>
      <div className='frame'>
        <div className='paint'>
          <img 
            src="https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg" 
            alt="paint" 
          />
          <div className='paint-info'>
            <div>
              <h2 className='decoration'>The Starry Night</h2>
              <span>Vincent van Gogh</span>
            </div>
          </div>
        </div>
      </div>

      <section className='comments'>
        {
          comments.map(comment => {
            return (
              <div className='comment' key={comment.id}>
                <span className='comment-username decoration'>
                  {comment.username}
                </span>
                <p className='comment-message'>
                  {comment.message}
                </p>
              </div>
            )
          })
        }
      </section>
      <form onSubmit={handleNewComment} className='from'>
        <div className='form-content'>
          <input type="text" placeholder='Username' name='username'/>
          <textarea name="message" placeholder='Message...'/>
          <button type="submit">Comment</button>
        </div>
      </form>
    </>
  )
}

export default App
