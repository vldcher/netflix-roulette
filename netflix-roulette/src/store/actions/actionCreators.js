import axios from "axios";
import actionTypes from "./actionTypes";

const BASE_URL = " http://localhost:3004";

export const fetchMovies = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/movieList`);
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res.data });
};

export const fetchGenres = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/genres`);
  dispatch({ type: actionTypes.FETCH_GENRES, payload: res.data });
};

export const fetchSortBy = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/sortBy`);
  dispatch({ type: actionTypes.FETCH_SORT_BY_LIST, payload: res.data });
};

export const selectMovie = (selectedMovie) => ({
  type: actionTypes.SELECT_MOVIE,
  payload: selectedMovie,
});

export const selectSearch = () => ({
  type: actionTypes.SELECT_SEARCH,
});

export const selectSortedBy = (sortBy) => ({
  type: actionTypes.SELECT_SORTED_BY,
  payload: sortBy,
});

export const updateMovie = (updatedItem) => async (dispatch) => {
  const res = await axios.put(
    `${BASE_URL}/movieList/${updatedItem.id}`,
    updatedItem
  );
  dispatch({ type: actionTypes.EDIT_MOVIE, payload: res.data });
};

export const addMovie = (newMovie) => async (dispatch) => {
  const res = await axios.post(`${BASE_URL}/movieList/`, newMovie);

  dispatch({ type: actionTypes.ADD_MOVIE, payload: res.data });
};

export const deleteMovie = (deletedMovie) => async (dispatch) => {
  const res = await axios.delete(
    `${BASE_URL}/movieList/${deletedMovie.id}`,
    deletedMovie
  );

  dispatch({
    type: actionTypes.DELETE_MOVIE,
    payload: deletedMovie,
  });
};

export const fetchMovieById = (movieId, history = null) => async (dispatch) => {
  const res = await axios
    .get(`${BASE_URL}/movieList/${movieId}`)
    .catch((err) => {
      if (history) {
        history.push("/");
      }
    });
  if (res) {
    dispatch({ type: actionTypes.FETCH_MOVIE_BY_ID, payload: res.data });
  }
};

export const fetchSearchMovies = (searchTerm) => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/movieList?q=${searchTerm}`);
  dispatch({ type: actionTypes.FETCH_MOVIES, payload: res.data });
};

export const filterMovies = (filterBy) => ({
  type: actionTypes.FILTER_MOVIES,
  payload: filterBy,
});

export const setFilterBy = (filterBy) => ({
  type: actionTypes.SET_FILTER_BY,
  payload: filterBy,
});