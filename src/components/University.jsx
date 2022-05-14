import React from "react";
import { Link } from "react-router-dom";
export const University = ({ name, id }) => {
  return (
    <div className="container container-fluid">
      <p>{name}</p>
      <Link to={`/${name}`}>Reviews</Link>
    </div>
  );
};
