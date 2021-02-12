import React from 'react';


const MovieList = (props) => {
  return (
    <div className="d-flex row img-container">
      <>
     
        <i class="fas fa-chevron-left" onClick={() => {
         window.scroll({right: 500, behavior: 'smooth'});
        }}></i>
          {props.movies.map((movie, index) => (
            <div className="m-3">
              <img src={movie.Poster} className="h-100"></img>
            </div>
          ))}
        <i class="fas fa-chevron-right" onClick={() => {
         window.scroll({left: 500, behavior: 'smooth'});
        }}></i>
      
      </>
    </div>
  )
}

export default MovieList
