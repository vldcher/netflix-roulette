import React from "react";
import "./filter-item.scss";


export default (props) => {

  const { filter } = props;

  return (
    <li className="list-item">{filter}</li>
  );
};