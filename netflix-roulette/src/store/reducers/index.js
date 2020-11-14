import { combineReducers } from "redux";
import moviesReducer from "./movies.reducer";
import { sortByReducer } from "./sorting.reducer";
import { genresReducer } from "./genres.reducer";

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  sortBy: sortByReducer,
});