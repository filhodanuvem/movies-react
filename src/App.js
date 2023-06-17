import './App.scss';
import Movie from './Movie';
import { useState, useEffect} from 'react';

const proto = {};
proto.movie = require('./movie_grpc_web_pb.js');

function App() {
  let url  = process.env.REACT_APP_BACKEND_URL;
  if(url == null){
    url = "http://localhost:50051"
  }

  const client = new proto.movie.MovieClient(url, null, null);
  let [movies, setMovies] = useState([])
  useEffect(() => {
    const req = new proto.movie.MovieRequest();
    client.getMovies(req, {}, (err, response) => {
      let m = []
      if(response == null){
        return
      }

      if (response.getMoviesList().length === 0) {
        return
      }

      response.getMoviesList().forEach((movie) => {
        console.log(movie.toObject())
        m.push(movie.toObject())
      })
      setMovies(m)
    }) 
  }, [])

  return (
    <div className="App">
      {movies.map((movie) => (
          <Movie key={movie.id} details={movie} />
      ))}
      
    </div>
  );
}

export default App;
