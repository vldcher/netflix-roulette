import React, {useContext} from "react";
import PropTypes from 'prop-types';
import MovieAction from "../MovieActions/MovieAction";

import "./movie.scss";
import filmImg from "../../img/film1.png"

import { MoviesContext } from "../../state/moviesContext";

function Movie(props) {

  const { updateDetailsVisibility } = useContext(MoviesContext);

  const { title, year, description, photo } = props.movie;

  return (
    <li
      className="movies__list-item">
      <img src={filmImg} alt={photo.title}></img>
      <MovieAction movieData={props.movie} />
      <div className="movie__title" onClick={updateDetailsVisibility}>
        {title}
        <span className="movie__year">{year.split("-")[0]}</span>
      </div>
      <p className="movie__description">{description}</p>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
};

export default Movie;