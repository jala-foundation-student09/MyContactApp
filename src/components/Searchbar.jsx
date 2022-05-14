import React from "react";

export const Searchbar = ({ university, setUniversity, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(university);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="university name..."
        value={university}
        onChange={(e) => setUniversity(e.target.value)}
      ></input>
    </form>
  );
};
