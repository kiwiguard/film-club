import { Link } from "react-router-dom";
import placeholderHorizontal from "../Images/placeholder_horizontal.jpg";

const MovieList = ({ movies, title }) => {
  return (
    <div className="movie-list">
      <h1>{title}</h1>
      {movies.map((movie) => (
        <div className="movie-preview" key={movie._id}>
          <Link to={`/movies/${movie._id}`}>
            <img
              className="movie-preview--img"
              src={placeholderHorizontal}
              alt="placeholder movieposter"
            />
            <h2 className="movie-preview--title">{movie.title}</h2>
            <p className="movie-preview--rating">{movie.rating}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
