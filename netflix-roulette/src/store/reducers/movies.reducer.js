import actionTypes from "../actions/actionTypes";

const moviesInitState = {
  movieList: [],
  filteredMovieList: [],
  selectedMovie: null,
  movieView: false,
};

const moviesReducer = (state = moviesInitState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES:
      return {
        ...state,
        movieList: [...payload],
        filteredMovieList: [...payload],
      };
    case actionTypes.FETCH_MOVIE_BY_ID:
      return { ...state, selectedMovie: { ...payload }, movieView: true };
    case actionTypes.EDIT_MOVIE:
      const updatedList = [...state.movieList].map(
        (movie) => (movie = movie.id === payload.id ? payload : movie)
      );

      return {
        ...state,
        movieList: updatedList,
        filteredMovieList: updatedList,
      };
    case actionTypes.ADD_MOVIE:
      const increasedList = [...state.movieList, payload];

      return {
        ...state,
        movieList: increasedList,
        filteredMovieList: increasedList,
      };
    case actionTypes.DELETE_MOVIE:
      const decreasedList = state.movieList.filter(
        ({ id }) => id !== payload.id
      );
      return {
        ...state,
        movieList: decreasedList,
        filteredMovieList: decreasedList,
      };
    case actionTypes.FILTER_MOVIES:
      const filteredList = payload
        ? [...state.movieList].filter((movie) => movie.genres.includes(payload))
        : [...state.movieList];
      return {
        ...state,
        filteredMovieList: filteredList,
      };
    case actionTypes.SELECT_MOVIE:
      return { ...state, selectedMovie: { ...payload }, movieView: true };
    case actionTypes.SELECT_SEARCH:
      return { ...state, selectedMovie: null, movieView: false };
    default:
      return state;
  }
};

export default moviesReducer;