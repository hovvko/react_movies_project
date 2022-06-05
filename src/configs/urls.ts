const baseURL = process.env.REACT_APP_API;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const urls = {
    movies: `${baseURL}/discover/movie?api_key=${REACT_APP_API_KEY}`,
    movie: `${baseURL}/movie/`,
    genres: `${baseURL}/genre/movie/list?api_key=${REACT_APP_API_KEY}`,
    search: `${baseURL}/search/movie?api_key=${REACT_APP_API_KEY}`,
    trending: `${baseURL}/trending/movie/day?api_key=${REACT_APP_API_KEY}`,
    tv: `${baseURL}/discover/tv?api_key=${REACT_APP_API_KEY}`,
    tvSingle: `${baseURL}/tv/`,
    tvGenres: `${baseURL}/genre/tv/list?api_key=${REACT_APP_API_KEY}`,
    tvSearch: `${baseURL}/search/tv?api_key=${REACT_APP_API_KEY}`,
    tvTrending: `${baseURL}/trending/tv/day?api_key=${REACT_APP_API_KEY}`
};

export {
    baseURL,
    urls
};