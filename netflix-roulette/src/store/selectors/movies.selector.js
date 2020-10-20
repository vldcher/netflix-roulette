export const useMoviesState = ({ movies }) => movies;

export const useFilteredMoviesState = (state) => useMoviesState(state).filteredMovieList;

export const useMovieView = (state) => useMoviesState(state).movieView;

export const useSelectedMovie = (state) => useMoviesState(state).selectedMovie;

export const useGenresState = (state) => state.genres;

export const useGenresListState = (state) => useGenresState(state).list;

export const useSortByState = (state) => state.sortBy;

