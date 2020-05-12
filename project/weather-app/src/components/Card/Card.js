import React from "react";
import styles from "./Card.module.scss";
import Weather from "./components/Weather";
import Header from './components/Header';

const Card = () => { 
  return <div className={styles.wrapper}>
    <Header/>
    <Weather/>
  </div>;
                   }

export default Card;
