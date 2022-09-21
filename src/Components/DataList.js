import { Link } from "react-router-dom";

const DataList = ({ movies }) => {
  const data = Object.entries(movies.results);
  console.log(data);

  return (
    <div className="movie-list">
      {data.map((movie) => (
        <div className="movie-preview" key={movie._id}>
          <Link to={`/movies/${movie._id}`}>
            <img
              className="movie-preview--img"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-preview--rating">{movie.vote_average}</p>
            <h2 className="movie-preview--title">{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default DataList;
