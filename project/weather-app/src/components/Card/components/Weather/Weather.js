import React, { useState } from "react";
import styles from "./Weather.module.scss";
import classNames from "classnames";
import DailyWeather from "./components/DailyWeather";
import Calender from "./components/Calender";
import { updateWeather } from './action'; 
import { useSelector,useDispatch } from "react-redux";

let cx = classNames.bind(styles);

const weatherIcon = {
  sunShower: "sun-shower",
  thunderStorm: "thunder-storm",
  cloudy: "cloudy",
  flurries: "flurries",
  sunny: "sunny",
  rainy: "rainy",
};



const Weather = () => {
// const [weatherState, setWeatherState] = useState({
//   tempMax: 0,
//   tempMin: 0,
//   weather: "cloudy",
// });
// const currentLocation = useSelector((state) => state.location.toLowerCase());
// const dispatch = useDispatch();

// const adr = `http://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=59f50906ffa57b3737627dd27793aedc&units=metric`;
// let weatherData = {};

//   const getData = async () => {
//     let res = await fetch(
//       `https://community-open-weather-map.p.rapidapi.com/weather?&units=metric&q=${currentLocation}`,
//       {
//         method: "GET",
//         headers: {
//           "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//           "x-rapidapi-key":
//             "e5c291fe26mshbc022f74aa64e54p14f06djsnb50329cc398f",
//         },
//       }
//     ).catch((err) => {
//       console.log(err);
//     });
//     res.json().then(
//       (data) => {console.log(data.main)}
//                 //   dispatch(updateWeather(
//                 //         data.main.temp_min,
//                 //         data.main.temp_max,
//                 //         data.weather[0].main
//                 //       )):console.log(undefined)
//                 // }
//     );
//   }
//   getData();  
  const today = useSelector((state) => state.date.today);
  const weather = useSelector((state) => state.weather);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <DailyWeather
          Date={"Sun"}
          href={weatherIcon.sunShower}
          temp={[weather[0].tempMin, weather[0].tempMax]}
          className={today === 0 ? "today" : ""}
        />
        <DailyWeather
          Date={"Mon"}
          href={weatherIcon.thunderStorm}
          temp={[weather[1].tempMin, weather[1].tempMax]}
          className={today === 1 ? "today" : ""}
        />
        <DailyWeather
          Date={"Tue"}
          href={weatherIcon.flurries}
          temp={[weather[2].tempMin, weather[2].tempMax]}
          className={today === 2 ? "today" : ""}
        />
        <DailyWeather
          Date={"Wed"}
          href={weatherIcon.sunny}
          temp={[weather[3].tempMin, weather[3].tempMax]}
          className={today === 3 ? "today" : ""}
        />
        <DailyWeather
          Date={"Thu"}
          href={weatherIcon.cloudy}
          temp={[weather[4].tempMin, weather[4].tempMax]}
          className={today === 4 ? "today" : ""}
        />
        <DailyWeather
          Date={"Fri"}
          href={weatherIcon.rainy}
          temp={[weather[5].tempMin, weather[5].tempMax]}
          className={today === 5 ? "today" : ""}
        />
        <DailyWeather
          Date={"Sat"}
          href={weatherIcon.sunny}
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
