import actionTypes from "../actions/actionTypes";
import { combineReducers } from "redux";
import moviesReducer from "./movies.reducer";

const initGenres = { list: [], selected: null };
const sortByState = { list: [], selected: null };

const genresReducer = (state = initGenres, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_GENRES:
      return { ...state, list: [...payload] };
    case actionTypes.SET_FILTER_BY:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

const sortByReducer = (sortBy = sortByState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SORT_BY_LIST:
      return { ...sortBy, list: [...payload], selected: [...payload][0] };
    case actionTypes.SELECT_SORTED_BY:
      return {
        ...sortBy,
        selected: [...sortBy.list].find((el) => el.code === payload.code),
      };
    default:
      return sortBy;
  }
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  sortBy: sortByReducer,
});