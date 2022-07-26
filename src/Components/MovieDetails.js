import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const MovieDetails = () => {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isPending,
  } = useFetch("http://localhost:4000/api/movies/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:4000/api/movies/" + movie.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="movie-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <article>
          <h2>{movie.title}</h2>
          <p>{movie.rating}</p>
          <div>{movie.excerpt}</div>
          <button className="delete" onClick={handleClick}>
            Radera
          </button>
        </article>
      )}
    </div>
  );
};

export default MovieDetails;
