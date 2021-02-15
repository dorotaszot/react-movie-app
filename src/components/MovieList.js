import React from 'react';


const MovieList = (props) => {
  const AddToFavouritesComponent = props.addToFavourites;
  return (

    <div className="d-flex flex-wrap movielist-container">
 
          {props.movies.map((movie, index) => (
            <div className="m-3 img-container">
              <img src={movie.Poster} className="h-100 w-100"></img>
              <div className="overlay d-flex justify-content-center align-items-center p-3"><AddToFavouritesComponent /></div>
            </div>
          ))}
    
    </div>
  )
}

export default MovieList
