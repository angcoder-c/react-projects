import { useEffect, useRef, useState } from 'react'
import Form from './components/form/form'
import Card from './components/card/card'
import Modal from './components/modal/modal'
import useSearch from './hooks/useSearch'
import useCharacter from './hooks/useCharacter'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [infoModal, setInfoModal] = useState(null)
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

  const handleShowModal = (card) => {   
    setInfoModal(card)
    setShowModal(true)
  }

  const handleCloseModal = e => {
    setShowModal(false)
  }
  
  useEffect(()=>{
    const randomPage = Math.floor(Math.random()*42)
    const init = async () => {
      await getCharacters('', '', randomPage)
    }
    if (!search && !species){
      init()
    }
  }, [])

  const render = () => {
    if (loading) {
      return (
        <p>Loading...</p>
      )
    }

    if (!(characters?.length>0)) {
      return (
        <p>Not found</p>
      )
    }

    return (
      <div className='card-container'>
        {    
          characters?.map(
          character=>(
            <Card
            key={character.id}
            info={character}
            showModal={handleShowModal}
            />
          ))
        }
      </div>
      )
  }

  return (
    <>
      <Modal
      info={infoModal}
      show={showModal}
      closeModal={handleCloseModal}
      />
      <h1>Rick and Morty Characters</h1>
      <Form 
      onSubmit={handleSubmit} 
      setSearch={handleOnChangeSearch} 
      setSpecies={handleOnChangeSpecies}
      setStatus={handleFilter}
      />
      {
        render()
      }
    </>
  )
}

export default App
