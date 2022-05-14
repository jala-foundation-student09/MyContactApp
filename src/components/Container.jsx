import React, { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { UniversitiesList } from "./UniversitiesList";
import apiUni from "./../api";
export const Container = () => {
  const [universities, setUniversities] = useState([]);

  // const fetchUniversities = async () => {
  //   const response = await apiUni.get("/");
  //   setUniversities(response.data);
  // };
  const fetchUniversities = async () => {
    const res = await fetch("http://universities.hipolabs.com/");
    const data = await res.json();
    setUniversities(data);
  };

  useEffect(() => {
    fetchUniversities();
  }, []);
  console.log(universities);

  return (
    <div>
      <h1>University List App</h1>
      <Searchbar />
      <UniversitiesList />
    </div>
  );
};
