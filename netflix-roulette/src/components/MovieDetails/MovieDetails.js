import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchGenres, fetchMovieById } from "../../store/actions/actionCreators";
import { useGenresListState, useSelectedMovie } from "../../store/selectors/movies.selector";


import "./movie-details.scss";
import filmImg from "../../img/film1.png"

const  MovieDetails = () => {

  const { id } = useParams();
  const history = useHistory(); 
  const dispatch = useDispatch();
  const movie = useSelector(useSelectedMovie);
  const genreList = useSelector(useGenresListState);


  useEffect(() => {
    if (!movie || !genreList.length || id !== movie.id) {
      dispatch(fetchMovieById(id, history));
      dispatch(fetchGenres());
    }
  }, [id]);

  return (
    <section className="description-wrapper">
      <img src={filmImg} alt="movie" className="description__image"></img>
      <div className="description__info">
        <div className="movie__title">
          <span className="movie__title-text">{movie?.title}</span>
          <span className="movie__title-rating">{movie?.rate}</span>
        </div>
        <p className="movie__genre">{movie?.genre}</p>
        <div className="movie__info">
          <span className="movie__info-year">{movie?.year.split("-")[0]}</span>
          <span className="movie__info-duration">{movie?.runTime} min</span>
        </div>
        <p className="movie__description">{movie?.description}</p>
      </div>
    </section>
  );
}

export default MovieDetails;
