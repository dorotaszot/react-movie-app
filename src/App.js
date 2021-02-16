import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddToFavourites from './components/AddToFavourites';

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

    const FavouriteClick = (movie) => {
      const newFavouritesArr = [...favourites, movie];
      setFavourites(newFavouritesArr);
    }

  return (
    <div className="container"> 
      <div className="d-flex align-items-center justify-content-between mt-3 mb-3">
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
        <MovieList movies={movies} addToFavourites={AddToFavourites} handleFavouriteClick={FavouriteClick}/>
      
      <div className="mt-3 mb-3">
        <MovieListHeading heading='Favourites' className="container"/>
        <MovieList movies={favourites} addToFavourites={AddToFavourites} className="d-flex align-items-center justify-content-between container-fluid"/>
      </div>
    </div>
  );
}

export default App;
