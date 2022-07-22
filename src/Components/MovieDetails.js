import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div className="movie-details">
      <h2>Movie details - {id}</h2>
    </div>
  );
};

export default MovieDetails;