import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

    const getMoviesRequest = async () => {
      const response = await fetch('http://www.omdbapi.com/?s=love&apikey=2821e511')
      const data = await response.json();
      console.log(data);
      setMovies(data.Search);
    }
  
    useEffect(() => {
      getMoviesRequest();
    }, []);

  return (
    <div className="container-fluid ">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
