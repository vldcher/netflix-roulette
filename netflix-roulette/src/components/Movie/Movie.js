import React from "react";
import PropTypes from 'prop-types';

import "./movies.scss";
import filmImg from "../../img/film1.png"


function Movie(props) {

  const { title, year, description } = props.movie;

  return (
    <li
      className="movies__list-item">
      <img src={filmImg} alt="movie"></img>
      <button className="movie__action-button"></button>
      <div className="movie__title">{title}
        <span className="movie__year">{year}</span>
      </div>
      <p className="movie__description">{description}</p>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default Movie;