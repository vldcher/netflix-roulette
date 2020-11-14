import actionTypes from "../actions/actionTypes";

const initGenres = { list: [], selected: null };

export const genresReducer = (state = initGenres, { type, payload }) => {
    switch (type) {
      case actionTypes.FETCH_GENRES:
        return { ...state, list: [...payload] };
      case actionTypes.SET_FILTER_BY:
        return { ...state, selected: payload };
      default:
        return state;
    }
  };
