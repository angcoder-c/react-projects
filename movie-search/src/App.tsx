import { useState } from 'react'
import Form from './components/form/form'
import MovieCard from './components/movieCard/movieCard'
import { useMovies } from './hooks/useMovies'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const {movies, arrMovies, loading} = useMovies(search)
  const action = (event:any) => {
    event.preventDefault()
    arrMovies(search)
  }

  const handleChange = (event:any) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    arrMovies(newSearch)
  }
  return (
    <>
      <h1>Movie Search</h1>
      <Form onSubmit={action} onChange={handleChange} />
      <div className="movies-pool">
        {loading ? (
          <p>Loading...</p>
        ) : movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              year={movie.year}
              id={movie.id}
              type={movie.type}
              poster={movie.poster}
            />
          ))
        ) : (
          <p>Movie not found</p>
        )}
      </div>
    </>
  )
}

export default App
