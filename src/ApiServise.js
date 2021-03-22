import Axios from 'axios';

const fetchPopularFilms = () =>
  Axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=be58fb48f511900f673ad953770b63b7',
  ).then(response => response.data.results);

const fetchFilmsWithQuery = query =>
  Axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=be58fb48f511900f673ad953770b63b7&query=${query}&page=1&`,
  ).then(response => response.data.results);

const fetchFilmDetails = movieId =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=be58fb48f511900f673ad953770b63b7&append_to_response=images`,
  ).then(response => response.data);

const fetchCast = movieId =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=be58fb48f511900f673ad953770b63b7&append_to_response=images`,
  ).then(response => response.data);

const fetchReviews = movieId =>
  Axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=be58fb48f511900f673ad953770b63b7&append_to_response=images`,
  ).then(response => response.data);

export {
  fetchPopularFilms,
  fetchFilmsWithQuery,
  fetchFilmDetails,
  fetchCast,
  fetchReviews,
};
