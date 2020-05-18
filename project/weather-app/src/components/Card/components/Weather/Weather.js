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

const currentLocation = "heathmont,melbourne";
const adr = `http://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=59f50906ffa57b3737627dd27793aedc&units=metric`;
let weatherData = {};
// fetchData(){
//   // fetch(adr)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     this.setState({
//   //       weather: data.weather[0].main,
//   //       tempMax: data.main.temp_max,
//   //       tempMin: data.main.temp_min,
//   //     });
//   //   });
// }

const Weather = () => {
  const today = useSelector((state) => state.date.today);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DailyWeather
          Date={"Sun"}
          href={weatherIcon.sunShower}
          temp={[6, 12]}
          className={today === 0 ? "today" : ""}
        />
        <DailyWeather
          Date={"Mon"}
          href={weatherIcon.thunderStorm}
          temp={[4, 13]}
          className={today === 1 ? "today" : ""}
        />
        <DailyWeather
          Date={"Tue"}
          href={weatherIcon.flurries}
          temp={[8, 16]}
          className={today === 2 ? "today" : ""}
        />
        <DailyWeather
          Date={"Wed"}
          href={weatherIcon.sunny}
          temp={[4, 12]}
          className={today === 3 ? "today" : ""}
        />
        <DailyWeather
          Date={"Thu"}
          href={weatherIcon.cloudy}
          temp={[5, 7.22]}
          className={today === 4 ? "today" : ""}
        />
        <DailyWeather
          Date={"Fri"}
          href={weatherIcon.rainy}
          temp={[5, 14]}
          className={today === 5 ? "today" : ""}
        />
        <DailyWeather
          Date={"Sat"}
          href={weatherIcon.sunny}
          className={today === 6 ? "today" : ""}
          temp={[5, 17]}
          last={true}
        />
      </div>
      <Calender />
    </div>
  );
};

export default Weather;
