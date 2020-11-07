import actionTypes from "../actions/actionTypes";

const sortByState = { list: [], selected: null };

export const sortByReducer = (sortBy = sortByState, { type, payload }) => {
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
