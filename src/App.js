import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToFavourites from './components/AddToFavourites';
import RemoveFavouriteMovie from './components/RemoveFavouriteMovie';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    const getMoviesRequest = async (searchValue) => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=2821e511`)
      const data = await response.json();
      console.log(data);
      if(data.Search) {
        setMovies(data.Search);
      }
    }
  
    useEffect(() => {
      getMoviesRequest(searchValue);
    }, [searchValue]);

    const addFavouriteMovie = (movie) => {
      const newFavouritesArr = [...favourites, movie];
      setFavourites(newFavouritesArr);
    };

    const deleteFavouriteMovie = (movie) => {
      const filteredFavouritesArr = favourites.filter((favourite) => favourite.imdbID !== movie.imdbID);
      setFavourites(filteredFavouritesArr);
    }

  return (
    <div className="container"> 
      <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div>
        <MovieList movies={movies} favouriteComponent={AddToFavourites} handleFavouriteClick={addFavouriteMovie} />
      </div>
      <div className="mt-3 mb-3">
        <MovieListHeading heading='Favourites' className="container"/>
        <MovieList movies={favourites} favouriteComponent={RemoveFavouriteMovie} handleFavouriteClick={deleteFavouriteMovie} className="d-flex align-items-center justify-content-between container-fluid"/>
      </div>
    </div>
  );
}

export default App;
