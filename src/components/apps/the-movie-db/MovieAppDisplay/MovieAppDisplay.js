import React from 'react';
import style from 'styled-components';

const MovieAppDisplay = ({movie}) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            <h5>{movie.original_title}</h5>
            <p>{movie.overview}</p>
        </div>
        
    )
        
}

const Movie = style.div`
    margin: 5px;
    width: 300px;
    height: 500px;
    border-radius: 5px;
    text-align: center;
    background-color: #48b1bf;
    `;

    const Poster = style.img`
        width:calc(100% - 20px);
        height: calc(100% - 10px);
        margin: 10px 10px 0 10px;
        border-radius: 5px;
        `;

    const Title = style.h5`
        margin: 5px 0 0 0;
        color: white;
        `;

    const Description = style.p`
        height: 20%;
        color: white;
        overflow-wrap: break-word;
        overflow: scroll;
        `;



export default MovieAppDisplay;