import React from "react";
import PropTypes from 'prop-types';

import "./sorting.scss";

function Sorting({ sortingVariants }) {

  return (
    <div className="sorting">
      <label htmlFor="sorting__title">Sort by :</label>

      <select className="sorting__list" name="type">
      {sortingVariants.map(variant => {
          return (
            <option value={variant.value}
              key={variant.id}
              className="sorting__list-item">
              {variant.value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Sorting.propTypes = {
  sortingVariants: PropTypes.array
};

export default Sorting;