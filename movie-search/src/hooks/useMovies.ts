import { useCallback, useRef, useState } from "react"
import { getMovies } from "../service/movies"

interface Movie {
    id: string;
    title: string;
    year: string;
    type: string;
    poster: string;
}

export const useMovies = (search:string) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const previousSearch = useRef(search)
  
    const arrMovies = useCallback(async (search: string) => {
      if (search === previousSearch.current) return
      setLoading(true); 
      try {
        const resmovies = await getMovies(search);
        previousSearch.current=search
        setMovies(resmovies); 
      } catch (err) {
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false); 
      }
    }, []);
  
    return { movies, arrMovies, loading };
  };