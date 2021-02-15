import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

    const getMoviesRequest = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=2821e511`)
      const data = await response.json();
      console.log(data);
      if(data.Search) {
        setMovies(data.Search);
      }
    }
  
    useEffect(() => {
      getMoviesRequest();
    }, [searchValue]);

  return (
    <div className="container-fluid"> 
      <div className="container d-flex align-items-center justify-content-between mt-3 mb-3">
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
