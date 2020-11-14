import { genresReducer } from "../../store/reducers/genres.reducer";
import actionTypes from "../../store/actions/actionTypes";

describe('sorting reducer tests', () => {
  const initGenres = { list: [], selected: null };
  const mock = [
    { code: "0", title: "All" },
    { code: "1", title: "Adventure" },
    { code: "2", title: "Music" },
  ];

  it('should call genresReducer', () => {
    expect(genresReducer(undefined, {})).toEqual(initGenres);
  });

  it('should fetch genres list', () => {
    const fetchAction = {
      type: actionTypes.FETCH_GENRES,
      payload: mock
    };

    expect(genresReducer(undefined, fetchAction)).toEqual({
      list: mock,
      selected: null
    });
  });

  it('should set filtered by value', () => {
    const prevState = {
      list: mock,
      selected: [...mock][0]
    };
    const selected = { code: "2", title: "title" };
    const selectAction = {
      type: actionTypes.SET_FILTER_BY,
      payload: selected
    };

    expect(genresReducer(prevState, selectAction)).toEqual({
      list: mock,
      selected: selected
    });
  })
}); 