/*npx json-server --watch data/db.json --port 8000*/
import useFetch from "./useFetch";
import MovieList from "./MovieList";
import nowStreamingImg from "../Images/placholder.jpg";

const Home = () => {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:4000/api/movies");

  return (
    <div className="home">
      <div className="nowStreaming">
        <div className="nowStreaming-info">
          <div className="nowStreaming-info--movie-details">
            <h1 className="nowStreaming-info--title fs-alt">DUNE (2021)</h1>
            <p className="movie-details--specs fs-24">
              2h 35m • Science Fiction, Äventyr
            </p>
            <p className="nowStreaming-info--excerpt fs-24">
              Paul Atreides är en briljant och talangfull ung man född med ett
              storslaget öde som måste resa till den farligaste planeten i
              universum för att säkra sin familjs och sitt folks framtid. När
              illasinnade krafter kastas in i en konflikt om tillgången till
              planetens mest värdefulla råvara - ett ämne med förmågan att låsa
              upp mänsklighetens fulla potential - kommer bara de som övervinner
              sina rädslor att överleva.
            </p>
            <div className="nowStreaming-info--showing-wrapper">
              <div className="nowStreaming-info--showing">
                <p className="fs-yellow fs-alt nowStreaming-info--showing-title">
                  <span className="material-symbols-outlined fs-yellow fs-30">
                    calendar_month
                  </span>
                  Visningstillfälle
                </p>
                <p className="nowStreaming-info--date fs-alt">
                  Lördag 7/8 20:00
                </p>
                <p>Streamas på HBO MAX</p>
              </div>
              <button className="btn-primary btn-rating fs-alt flex-bottom">
                Betygsätt
                <span className="material-symbols-outlined no-margin fill fs-30">
                  thumb_up
                </span>
              </button>
            </div>
          </div>
          <img
            className="nowStreaming-poster"
            src={nowStreamingImg}
            alt="now streaming poster"
          />
        </div>

        <div className="blur-overlay"></div>
        <img
          className="nowStreamingImg"
          src={nowStreamingImg}
          alt="now streaming background"
        />
      </div>
      <div className="toplist">
        <h1 className="toplist-title fs-alt">TOPPLISTA</h1>
        <h2 className="toplist-arrow">\/</h2>
        {isPending && <div>Loading...</div>}
        {error && <div>Oops {error}</div>}
        {movies && <MovieList movies={movies} title="Topplista" />}
      </div>
    </div>
  );
};

export default Home;
