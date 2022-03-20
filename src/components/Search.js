import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.container}>
      <p>Search for anything!</p>
      <input placeholder="Search here!" />
    </div>
  );
};

export default Search;
