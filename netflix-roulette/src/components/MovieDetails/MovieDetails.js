import React from "react";
import PropTypes from 'prop-types';

import "./movie-details.scss";
import filmImg from "../../img/film1.png"

function MovieDetails(props) {

  const { title, year, genre, rating, description, duration } = props.movie;

  return (
    <section className="description-wrapper">
      <img src={filmImg} alt="movie" className="description__image"></img>
      <div className="description__info">
        <div className="movie__title">
          <span className="movie__title-text">{title}</span>
          <span className="movie__title-rating">{rating}</span>
        </div>
        <p className="movie__genre">{genre}</p>
        <div className="movie__info">
          <span className="movie__info-year">{year}</span>
          <span className="movie__info-duration">{duration} min</span>
        </div>
        <p className="movie__description">{description}</p>
      </div>
    </section>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default MovieDetails;
