import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <main>
        <h1>Comments</h1>
        <div className='comment'>
          <span>asjkas</span>
          <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique temporibus ipsam nostrum. Natus voluptatem a sunt, blanditiis, nemo iste voluptate consectetur voluptatum id accusantium vero corporis sed expedita quisquam nesciunt? 
          </p>
        </div>
      </main>
      <aside>
        <h2>New comment</h2>
        <form className='comment-form' onSubmit={(event:React.FormEvent<HTMLFormElement>)=>event.preventDefault()}>
          <input type="text" placeholder='Username'/>
          <textarea placeholder='Message...'/>
          <button>Submit</button>
        </form>
      </aside>
    </>
  )
}

export default App
