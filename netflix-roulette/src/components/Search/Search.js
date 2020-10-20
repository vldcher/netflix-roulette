import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { fetchSearchMovies } from "../../store/actions/actionCreators";
import "./search.scss";
import { Title } from "../Title";

export default () => {

  const titleText = 'find your movie';
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const urlSearchString = search.split("?=").join("");
    dispatch(fetchSearchMovies(urlSearchString ? urlSearchString : null));
  },[]);

  const onSearch = () => {
    dispatch(fetchSearchMovies(searchTerm ? searchTerm : null));
  };

  const keyPress = (e) => {
    if (e.keyCode === 'Enter') {
      e.preventDefault();
      onSearch();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="search">
      <Title text={titleText} />

      <form action="" className="search__form">
        <input className="search__form-input"
          id="search"
          type="text"
          placeholder="What do you want to watch ?"
          name="search"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={keyPress}
        />
        <Link to={`/search${searchTerm ? "?=" + searchTerm : ""}`}>
          <button className="button--search button button__primary"
            onClick={onSearch}
          >
            <span>search</span>
          </button>
        </Link>
      </form>
    </div>
  );
};