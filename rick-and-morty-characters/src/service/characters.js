const fetchCharacters = async ({ 
    name, 
    status
 }) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`);
        const json = await response.json();
        return json.results ? json.results : null;
    } catch (e) {
        console.error("An error occurred:", e.message); 
    }
}

export default fetchCharacters