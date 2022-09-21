import { useEffect, useState } from "react";

const useFetchAll = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  /* const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=65eac6bd3844bcaa8f6d85eccd75ed8c&language=sv-SE&query=${query}&page=1&include_adult=false`; */
  const dbUrl = `http://localhost:4000/api/movies`;

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(dbUrl, { signal: abortCont.Signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data.map(({ dataTitle }) => dataTitle));
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
  }, [dbUrl]);

  return { data, isPending, error };
};

export default useFetchAll;
