import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearchLocation} />
      </div>
      <div className={styles.field}>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Search;
