import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Movie } from "../Movie";
import { ErrorBoundry } from "../ErrorBoundry";

import "./movies-list.scss";

import { fetchMovies, fetchGenres, fetchSortBy } from "../../store/actions/actionCreators";
import MovieListActions from "./MovieListActions/MovieListActions";

const MoviesList = () => {

  const { movies, genres, sortBy } = useSelector((state) => state);
  const { filteredMovieList } = movies;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchGenres());
    dispatch(fetchSortBy());
  }, [dispatch]);

  const sortingMovie = (list, field) =>
    list.sort((a, b) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

  const getMovieList = useCallback(() => {
    return sortBy.selected
      ? sortingMovie(filteredMovieList, sortBy.selected.title)
      : filteredMovieList;
  }, [filteredMovieList, sortBy]);


  return (
    <ErrorBoundry>
      <>
        <MovieListActions genres={genres} />
        { getMovieList().length
          ?
          <div className="movies__results">
            <p className="movies__results-paragraph">
              <span className="movies__results-quantity">
                {getMovieList().length}
              </span>
            movies found
          </p>
          </div>
          :
          null
        }
        <ul className="movies__list">
          {filteredMovieList.length
            ? (
              getMovieList().map((movie) =>
                <Movie
                  key={movie.id}
                  movie={movie}
                />
              )
            )
            : (
              <div className="movies__list-not-found">
                <h1 className="movies__list-not-found-title">no movie found</h1>
              </div>
            )
          }
        </ul>
      </>
    </ErrorBoundry>
  );
};

export default MoviesList;
