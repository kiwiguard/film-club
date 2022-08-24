const API_KEY = "65eac6bd3844bcaa8f6d85eccd75ed8c"; //put in .env file

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=sv-SE`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=sv-SE`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
