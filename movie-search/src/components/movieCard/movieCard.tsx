import React from "react";
import { MovieCardType } from "./movieCard.types";

const MovieCard : React.FC<MovieCardType> = ({
    id,
    title, 
    year,
    type,
    poster
}) => {
    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={poster} alt="" />
            </div>
            <div className='movie-info'>
                <p>{title}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}

export default MovieCard