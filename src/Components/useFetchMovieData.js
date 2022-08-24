import { useEffect, useState } from "react";

const useFetchMovieData = (query) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=65eac6bd3844bcaa8f6d85eccd75ed8c&language=sv-SE&query=${query}&page=1&include_adult=false`;

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(baseUrl, { signal: abortCont.Signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [baseUrl]);

  return { data, isPending, error };
};

export default useFetchMovieData;
