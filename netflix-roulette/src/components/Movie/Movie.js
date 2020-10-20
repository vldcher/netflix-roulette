import React, { useContext } from "react";
import { useSelector } from "react-redux";

import PropTypes from 'prop-types';
import MovieAction from "../MovieActions/MovieAction";
import { Link } from "react-router-dom";

import "./movie.scss";
import filmImg from "../../img/film1.png"

import { MoviesContext } from "../../state/moviesContext";
import { useGenresListState } from "../../store/selectors/movies.selector";


function Movie(props) {

  const genreList = useSelector(useGenresListState);

  const { isDetailsVisible, updateDetailsVisibility } = useContext(MoviesContext);

  const { id, title, year, genres, photo } = props.movie;

  return (
    <li
      className="movies__list-item">
      <MovieAction movieData={props.movie} />
      <Link to={`/film/${id}`} onClick={() => updateDetailsVisibility(false)}>
      <img src={filmImg} alt={photo.title}/>
        <div className="movie__title">
          {title}
          <span className="movie__year">{year.split("-")[0]}</span>
        </div>
        <p className="movie__description">
          {genreList
            .filter(({ code }) => code !== "0" && genres.includes(code))
            .map(({ title }) => title)
            .join(", ")}
        </p>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  })
};

export default Movie;