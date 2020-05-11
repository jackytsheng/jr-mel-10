import React from "react";
import styles from "./Weather.module.scss";
import classNames from 'classnames';
import DailyWeather from './components/DailyWeather';
let cx = classNames.bind(styles);

const Weather = () => (
  <div className={styles.wrapper}>
    <DailyWeather />
    <DailyWeather />
    <DailyWeather />
    <DailyWeather />
    <DailyWeather />
    <DailyWeather />
    <DailyWeather />
  </div>
);

export default Weather;