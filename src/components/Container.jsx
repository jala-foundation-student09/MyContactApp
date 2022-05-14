import React, { useState, useEffect } from "react";
import { Searchbar } from "./Searchbar";
import { UniversitiesList } from "./UniversitiesList";

export const Container = () => {
  const baseUrl = "http://universities.hipolabs.com/search";

  // List of universities
  const [universities, setUniversities] = useState([]);

  // Filtered list name
  const [university, setUniversity] = useState("");

  const filteredUniversities = universities.filter((item) => {
    return item.name
      .toLowerCase()
      .normalize("NFD")
      .includes(university.toLowerCase().normalize("NFD"));
  });

  // Get universities info
  const fetchUniversities = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setUniversities(data);
  };

  useEffect(() => {
    fetchUniversities();
  }, []);

  return (
    <div className={styles.container}>
      <h1>University List App</h1>
      <div>
        <Searchbar university={university} setUniversity={setUniversity} />
      </div>
      <div className={styles.list}>
        <UniversitiesList
          data={university ? filteredUniversities : universities}
        />
      </div>
    </div>
  );
};
