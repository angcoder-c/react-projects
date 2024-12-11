const API_KEY = '85b13084'

export const getMovies = async (search:string) => {
    if (search==='') return undefined
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const movies = json.Search

        return movies?.map((movie:any)=>{
            return {
                title : movie.Title,
                year : movie.Year,
                id : movie.imdbID,
                type : movie.Type,
                poster : movie.Poster
            }
        })
    }
    catch (err) {
        throw new Error("search error");
    }
}