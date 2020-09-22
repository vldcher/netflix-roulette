import React from "react";
import "./main.scss";
import { FiltersList } from "../FiltersList";
import { Sorting } from "../Sorting";
import Movie from "../Movie";

export default () => {

  const moviesList = [
    { id: 1, title: "Pulp Fiction", description: "Action & Adventures", year: 2003, img: "" },
    { id: 2, title: "Bohemian Rhapsody", description: "Drama, Biography, Music", year: 2004, img: "" },
    { id: 3, title: "Kill Bill", description: "Oscar winning movie", year: 1994, img: "" },
    { id: 4, title: "Avengers: War of infinity", description: "Action & Adventures", year: 2004, img: "" },
    { id: 5, title: "Inception", description: "Oscar winning movie", year: 2003, img: "" },
    { id: 6, title: "Reservoir dogs", description: "Oscar winning movie", year: 1994, img: "" },
    { id: 7, title: "Green Mile", description: "Oscar winning movie", year: 1993, img: "" },
    { id: 8, title: "Lion King", description: "Oscar winning movie", year: 1994, img: "" },
  ];

  const sortingVariants = [
    { id: 1, value: "release date" },
    { id: 2, value: "name" },
  ];

  return (
    <main className="main">
      <section className="nav-wrapper">
        <FiltersList />
        <Sorting sortingVariants={sortingVariants} />
      </section>
      <section className="movies-wrapper">
        <Movie moviesList={moviesList} />
      </section>
    </main>
  );
};