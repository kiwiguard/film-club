import { useHistory, useParams } from "react-router-dom";
import useFetchMovieData from "./useFetchMovieData";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie, error, isPending } = useFetchMovieData("gladiator");
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:4000/api/movies/" + movie._id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  console.log(movie);

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.results[0].title}</h2>
          <img
            className="movie-preview--img"
            src={`https://image.tmdb.org/t/p/w500${movie.results[0].poster_path}`}
            alt={movie.results[0].title}
          />
          <p>{movie.results[0].vote_average}</p>
          <div>{movie.results[0].overview}</div>
          <button className="delete" onClick={handleClick}>
            Radera
          </button>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
