import MovieForm from "./MovieForm";
import useFetchMovieData from "./useFetchMovieData";
import DataList from "./DataList";

const Movies = () => {
  const {
    // destructuring return values (data, isPending, error) from useFetch
    data: movies,
    isPending,
    error,
  } = useFetchMovieData("eurotrip");

  //console.log(movies);
  //console.log(movies.result.original_title);

  return (
    <div className="container">
      <MovieForm />
      {isPending && <div>Loading...</div>}
      {error && <div>Oops {error}</div>}
      {movies && <DataList movies={movies} title="Topplista" />}
    </div>
  );
};

export default Movies;
