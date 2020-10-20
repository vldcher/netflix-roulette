import React from "react";
import { Link } from "react-router-dom";
import "./not-found.scss";
import { NotFoundPageLogo } from "../../img";


export default () => {

  return (
    <section className="not-found">
      <h1 className="not-found__title">page not found</h1>
      <img className="not-found__img"
        src={NotFoundPageLogo}
        alt="Page not found" />
      <Link class="button button__secondary button--not-found" to="/">
        go back to home
        </Link>
    </section>
  );
};