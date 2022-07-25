/*npx json-server --watch data/db.json --port 8000*/
import useFetch from "./useFetch";
import MovieList from "./MovieList";

const Home = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:8000/movies");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>Oops {error}</div>}
      {movies && <MovieList movies={movies} title="Topplista" />}
    </div>
  );
};

export default Home;
