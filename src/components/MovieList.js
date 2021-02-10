import React from 'react';


const MovieList = (props) => {
  return (
    <div>
      <>
          {props.movies.map((movie, index) => (
            <div className="m-3">
              <img src={movie.Poster}></img>
            </div>
          ))}
      </>
    </div>
  )
}

export default MovieList
