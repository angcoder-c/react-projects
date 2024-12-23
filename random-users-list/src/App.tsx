import { useState } from 'react'
import useUsers from './hooks/useUsers'
import './App.css'

function App() {
  const { users } = useUsers()
  console.log(users)

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
