import useFetch from "./useFetch";
import MovieList from "./MovieList";
import useFetchAll from "./useFetchAll";
import useFetchMovieData from "./useFetchMovieData";

const Toplist = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:4000/api/movies");

  /* Mabey this might work */
  /* Wrap in useEffect and chain promises or make something like MovieDetails mabey */
  /*   const { data: titles } = useFetchAll();
  const movieData = useFetchMovieData(titles);

  console.log(movieData); */

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>Oops {error}</div>}
      {movies && <MovieList movies={movies} title="Topplista" />}
      {/*       {titles.map((title) => (
        <p>{title}</p>
      ))} */}

      {/*       {movies && (
        <MovieList
          movies={movies.filter((movie) => movie.genre === "drama")}
          title="Bästa Drama"
        />
      )} */}
    </div>
  );
};

export default Toplist;
