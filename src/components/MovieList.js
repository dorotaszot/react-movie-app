import React from 'react';


const MovieList = (props) => {
  return (
    <div className="d-flex flex-wrap movielist-container">
 
          {props.movies.map((movie, index) => (
            <div className="m-3">
              <img src={movie.Poster} className="h-100 w-100"></img>
            </div>
          ))}
    
    </div>
  )
}

export default MovieList
