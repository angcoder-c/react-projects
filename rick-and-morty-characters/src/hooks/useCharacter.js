import { useState, useRef, useCallback, useMemo } from "react";
import fetchCharacters from '../service/characters'

const useCharacter = ({search, species}) => {
    const [loading, setLoading] = useState(false)
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(null)
    const previousSearch = useRef(search);

    const getCharacters = useCallback(async (name, status)=>{
        setLoading(true)
        setError(null)
        try {
            const chars = await fetchCharacters({name, status})
            previousSearch.current=search
            setCharacters(chars)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }    
    }, [])
    
    const charactersFiltered = useMemo(()=>{
        if (!characters) return 
        return (
            species
            ? [...characters].filter(character => character.species.toLowerCase()===species.toLowerCase())
            : characters
        )
    }, [species, characters])

    return {characters: charactersFiltered, getCharacters, loading, error}
}


export default useCharacter