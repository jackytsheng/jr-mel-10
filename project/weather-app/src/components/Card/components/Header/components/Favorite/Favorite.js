import React from "react";
import styles from "./Favorite.module.scss";
import Record from "./components/Record";

const Favorite = () => {
  return <div className={styles.wrapper}>
    <Record/>
  </div>;
};

export default Favorite;
