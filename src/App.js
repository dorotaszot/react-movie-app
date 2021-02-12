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
      "Title": "Going Down in LA-LA Land",
      "Year": "2011",
      "imdbID": "tt1599296",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwNjEzNTI0MV5BMl5BanBnXkFtZTcwMzI2MzY5Ng@@._V1_SX300.jpg"
    },
    {
      "Title": "La La Land",
      "Year": "2010",
      "imdbID": "tt1288499",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwMjcyNzg5N15BMl5BanBnXkFtZTcwMDI0MzkwMw@@._V1_SX300.jpg"
    }
  ])
  return (
    <div className="container-fluid ">
     


      <MovieList movies={movies}/>
</div>
      
     
  
  );
}

export default App;
