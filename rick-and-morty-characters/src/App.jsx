import { useEffect, useState } from 'react'
import Form from './components/form/form'
import useSearch from './hooks/useSearch'
import useCharacter from './hooks/useCharacter'
import './App.css'

function App() {
  const [status, setStatus] = useState('')
  const [filters, setFilters] = useState([])
  const {search, setSearch, species, setSpecies, fieldError} = useSearch()
  const {characters, getCharacters, loading, fetchError} = useCharacter({ search, species})
  
  const handleSubmit = async event => {
    event.preventDefault()
    await getCharacters(search, status)
  }
  
  const handleOnChangeSearch = async event => {
    let value=event.target.value
    setSearch(value)
    await getCharacters(search, status)
  }
  
  const handleOnChangeSpecies = async event => {
    let value=event.target.value
    setSpecies(value)
    await getCharacters(search, status)
  }
  
  const handleFilter = async event => {
    let tempFilters = filters
    if (event.target.checked) {
      tempFilters = [...tempFilters, event.target.id]
      let addFilter = tempFilters.length>1 ? '' :event.target.id
      setStatus(addFilter)
      setFilters(tempFilters)
      await getCharacters(search, addFilter)
      return 
    }
    
    if (!event.target.checked) {
      tempFilters.pop(event.target.id)
      let removedStatus = tempFilters.length===0?'':tempFilters[0]
      setStatus(removedStatus)
      setFilters(tempFilters)
      await getCharacters(search, removedStatus)
      return
    }
  }
  
  useEffect(()=>{
    const init = async () => {
      await getCharacters('', '')
    }
    init()
  }, [])

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <Form 
      onSubmit={handleSubmit} 
      setSearch={handleOnChangeSearch} 
      setSpecies={handleOnChangeSpecies}
      setStatus={handleFilter}
      />
      {
        loading
        ? (
          <p>Loading...</p>
        ) 
        : characters?.length>0
        ? characters?.map(
            character=>(
              <p key={character.id}>{character.name}</p>
            )
        )
        : (
          <p>Not found</p>
        )
      }
    </>
  )
}

export default App
