import React from "react";
import styles from "./Card.module.scss";
import Weather from "./components/Weather";

const Card = () => { 
  return <div className={styles.wrapper}>
    <Weather/>
  </div>;
                   }

export default Card;
