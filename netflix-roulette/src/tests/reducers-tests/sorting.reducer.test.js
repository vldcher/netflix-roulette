import { sortByReducer } from "../../store/reducers/sorting.reducer";
import actionTypes from "../../store/actions/actionTypes";

describe('sorting reducer tests', () => {
  const initialState = { list: [], selected: null };
  const mock = [
    { code: "1", title: "year" },
    { code: "2", title: "title" }
  ];

  it('should call sortByReducer', () => {
    expect(sortByReducer(undefined, {})).toEqual(initialState);
  });

  it('should set sorting list', () => {
    const fetchAction = {
      type: actionTypes.FETCH_SORT_BY_LIST,
      payload: mock
    };

    expect(sortByReducer(undefined, fetchAction)).toEqual({
      list: mock,
      selected: [...mock][0]
    });
  });

  it('should set sorted by value', () => {
    const prevState = {
      list: mock,
      selected: [...mock][0]
    };
    const selected = { code: "2", title: "title" };
    const selectAction = {
      type: actionTypes.SELECT_SORTED_BY,
      payload: selected
    };

    expect(sortByReducer(prevState, selectAction)).toEqual({
      list: mock,
      selected: selected
    });
  })
}); 