import React from "react";
import { University } from "./University";
export const UniversitiesList = ({ data }) => {
  return (
    <div className="container">
      {data.length !== 0
        ? data.map((item, index) => (
            <University key={index} name={item.name} id={item.id} />
          ))
        : null}
    </div>
  );
};
