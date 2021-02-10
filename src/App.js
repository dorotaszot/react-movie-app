import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      "Title": "La La Land",
      "Year": "2016",
      "imdbID": "tt3783958",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg"
    },
    {
      "Title": "Land of the Dead",
      "Year": "2005",
      "imdbID": "tt0418819",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzU1MDI1NDM1NF5BMl5BanBnXkFtZTcwMzU5OTkyMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Cop Land",
      "Year": "1997",
      "imdbID": "tt0118887",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNmNhMzI0NmQtMzU1OS00NzQzLTg0NzctZDJkODZlMjU3OTc5XkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg"
    }
  ])
  return (
    <div className="container-fluid">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
