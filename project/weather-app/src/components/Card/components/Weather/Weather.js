import React from "react";
import styles from "./Weather.module.scss";
import classNames from "classnames";
import DailyWeather from "./components/DailyWeather";
import Calender from "./components/Calender";
import { useSelector } from "react-redux";


let cx = classNames.bind(styles);

const weatherIcon = {
  sunShower: "sun-shower",
  thunderStorm: "thunder-storm",
  cloudy: "cloudy",
  flurries: "flurries",
  sunny: "sunny",
  rainy: "rainy",
};

const weatherMapper = {
  "Clear": "sunny",
  "Clouds":"cloudy",
  "Rain":"rainy",
  "Snow":"flurries",
  "Thunderstorm":"thunderStorm",
  "Drizzle":"sunShower",  
};

const Weather = () => {
  const today = useSelector((state) => state.date.today);
  const weather = useSelector((state) => state.weather);
  const weatherCondition = weather.map((daily) =>
    weatherMapper[daily.weather] ? weatherMapper[daily.weather] : "sunny"
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DailyWeather
          Date={"Sun"}
          href={weatherIcon[weatherCondition[0]]}
          temp={[weather[0].tempMin, weather[0].tempMax]}
          className={today === 0 ? "today" : ""}
        />
        <DailyWeather
          Date={"Mon"}
          href={weatherIcon[weatherCondition[1]]}
          temp={[weather[1].tempMin, weather[1].tempMax]}
          className={today === 1 ? "today" : ""}
        />
        <DailyWeather
          Date={"Tue"}
          href={weatherIcon[weatherCondition[2]]}
          temp={[weather[2].tempMin, weather[2].tempMax]}
          className={today === 2 ? "today" : ""}
        />
        <DailyWeather
          Date={"Wed"}
          href={weatherIcon[weatherCondition[3]]}
          temp={[weather[3].tempMin, weather[3].tempMax]}
          className={today === 3 ? "today" : ""}
        />
        <DailyWeather
          Date={"Thu"}
          href={weatherIcon[weatherCondition[4]]}
          temp={[weather[4].tempMin, weather[4].tempMax]}
          className={today === 4 ? "today" : ""}
        />
        <DailyWeather
          Date={"Fri"}
          href={weatherIcon[weatherCondition[5]]}
          temp={[weather[5].tempMin, weather[5].tempMax]}
          className={today === 5 ? "today" : ""}
        />
        <DailyWeather
          Date={"Sat"}
          href={weatherIcon[weatherCondition[6]]}
          className={today === 6 ? "today" : ""}
          temp={[weather[6].tempMin, weather[6].tempMax]}
          last={true}
        />
      </div>
      <Calender />
    </div>
  );
};

export default Weather;
