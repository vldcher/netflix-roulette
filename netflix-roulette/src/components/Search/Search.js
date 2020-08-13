import React from "react";
import "./search.scss";

export default () => {

  return (
    <div className="search">
      <h1 className="search__title"> find your movie</h1>

      <form action="" className="search__form">
        <input className="search__form-input"
          type="text"
          placeholder="What do you want to watch ?"
          name="search"
        />
        <button className="button--search button button__primary"
          type="submit">
          <span>search</span>
        </button>
      </form>
    </div>
  );
};