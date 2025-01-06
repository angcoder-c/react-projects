import { useEffect } from 'react'
import './App.css'
import useSWR from 'swr'

function App() {
  const fetcher = async () => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const json = await response.json()
    
    return json
  }
  const { data, error, isLoading } = useSWR('/api/topstories', fetcher)
  useEffect(()=>{
    console.log(data)
  }, [data])
  return (
    <>
      <h1>Hello wolrd</h1>
    </>
  )
}

export default App
