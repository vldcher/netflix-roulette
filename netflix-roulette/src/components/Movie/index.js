import React from "react";
import PropTypes from 'prop-types';

import "./movies.scss";
import Movie from "./Movie";
import { ErrorBoundry } from "../ErrorBoundry";

const MovieList = ({ moviesList }) => {
  return (
    <ErrorBoundry>
    <>
      <div className="movies__results">
        <p className="movies__results-paragraph">
          <span className="movies__results-quantity">
            {moviesList.length}
          </span>
        movies found
      </p>
      </div>
      <ul className="movies__list">
        {moviesList.map(movie => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </ul>
    </>
    </ErrorBoundry>
  );
};

MovieList.propTypes = {
  moviesList: PropTypes.array
};

export default MovieList;
