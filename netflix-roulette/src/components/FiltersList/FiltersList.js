import React from "react";
import { FilterItem } from "../FilterItem";

import "./filters-list.scss";


const filters = [
  { id: 0, name: "All" },
  { id: 1, name: "documentary" },
  { id: 2, name: "comedy" },
  { id: 3, name: "horror" },
  { id: 4, name: "crime" },
];


export default () => {


  return (
    <div className="filter">
      <ul className="filter__list">
        {filters.map((filter) => { 
          return(
          <FilterItem
            key={filter.id} 
            filter={filter.name}/>
          );
        })}
      </ul>
    </div>
  );
};