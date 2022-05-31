const baseURL = process.env.REACT_APP_API;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const urls = {
    movies: `${baseURL}/discover/movie?api_key=${REACT_APP_API_KEY}`,
    genres: `${baseURL}/genre/movie/list?api_key=${REACT_APP_API_KEY}`
};

export {
    baseURL,
    urls
};