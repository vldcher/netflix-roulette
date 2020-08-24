import React from "react";
import "./search.scss";
import { Title } from "../Title";

export default () => {

  const titleText = 'find your movie';

  return (
    <div className="search">
      <Title text={titleText}/>

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