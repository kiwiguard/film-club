import { Link } from "react-router-dom";
import placeholderHorizontal from "../Images/placeholder_horizontal.jpg";
/* import useFetchMovieData from "./useFetchMovieData"; */

const MovieList = ({ movies }) => {
  // hämta filmtitel från db, for each title -> skicka med som param i fetch mot tmdb
  // const movieTitle = movies.map((movie) => console.log(movie.dataTitle));

  // const movieTitles = await Promise.all (
  //   movieTitle.map(async (title) => {
  //     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=65eac6bd3844bcaa8f6d85eccd75ed8c&language=sv-SE&query=${title}&page=1&include_adult=false`);
  //     return await response.json();
  //   })
  // );

  // console.log(movieTitles.map);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-preview" key={movie._id}>
          <Link to={`/movies/${movie._id}`}>
            <img
              className="movie-preview--img"
              src={placeholderHorizontal}
              alt="placeholder movieposter"
            />
            <p className="movie-preview--rating">{movie.rating}</p>
            <h2 className="movie-preview--title">{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
