import { useEffect, useRef, useState } from "react"

const useSearch = () => {
    const [search, setSearch] = useState('')
    const [species, setSpecies] = useState('')
    const [inError, setInError] = useState(null)
    const firstUseSearch = useRef(true)
    const firstUseSpecies = useRef(true)

    useEffect(()=>{
        if (firstUseSearch.current) {
            firstUseSearch.current=search===''
            return
        }

        if (search==='') {
            setInError('Error: empty fields')
        }
    
        if (typeof search==='number') {
            setInError('Error: cannot search for numbers as characters.')
        }
    }, [search])

    useEffect(()=>{
        if (firstUseSpecies.current) {
            firstUseSpecies.current=search===''
            return
        }

        if (species==='') {
            setInError('Error: empty fields')
        }
    
        if (typeof species==='number') {
            setInError('Error: cannot search for numbers as characters.')
        }
    }, [species])

    return {search : search, setSearch, species, setSpecies, inError}
}


export default useSearch