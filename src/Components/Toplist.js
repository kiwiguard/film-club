import useFetch from "./useFetch";
import MovieList from "./MovieList";

const Toplist = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:4000/api/movies");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>Oops {error}</div>}
      {movies && <MovieList movies={movies} title="Topplista" />}

      {movies && (
        <MovieList
          movies={movies.filter((movie) => movie.genre === "drama")}
          title="Bästa Drama"
        />
      )}
    </div>
  );
};

export default Toplist;
