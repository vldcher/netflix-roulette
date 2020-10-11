import React from "react";
import "./main.scss";
import { MoviesList } from "../MoviesList";

export default () => {

  return (
    <main className="main">
      <section className="movies-wrapper">
        <MoviesList/>
      </section>
    </main>
  );
};