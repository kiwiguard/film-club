import { Link } from "react-router-dom";

const MovieList = ({ movies, title }) => {
  return (
    <div className="movie-list">
      <h1>{title}</h1>
      {movies.map((movie) => (
        <div className="movie-preview" key={movie._id}>
          <Link to={`/movies/${movie._id}`}>
            <h2>{movie.title}</h2>
            <p>Rating {movie.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
