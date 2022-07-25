/*npx json-server --watch data/db.json --port 8000*/
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import nowStreamingImg from "../Images/placholder.jpg";

const Home = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:8000/movies");

  return (
    <div className="home">
      <div className="nowStreaming">
        <div className="blur-overlay"></div>
        <img
          className="nowStreamingImg"
          src={nowStreamingImg}
          alt="now streaming background"
        />
      </div>
      <div className="toplist">
        <h1 className="toplist-title">Topplista</h1>
        <h2 className="toplist-arrow">\/</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>Oops {error}</div>}
        {movies && <MovieList movies={movies} title="Topplista" />}
      </div>
    </div>
  );
};

export default Home;
