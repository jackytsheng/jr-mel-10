import React from 'react';
import styles from './DailyWeather.module.scss';
import classNames from 'classnames';

const DailyWeather = (props)=> {
  const currentLocation ="heathmont,melbourne";
  const adr = `http://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=59f50906ffa57b3737627dd27793aedc&units=metric`;
  let weatherData = {};
  fetch(adr)
  .then((response) => response.json())
  .then((data) => weatherData = data.main);
  console.log(
    fetch(adr)
      .then((response) => response.json())
      .then((data) => (weatherData = data.main))
  );

  return (
    <div className={styles.weatherBox}>
      <div>{weatherData.temp_max}</div>
    </div>
  );
}


export default DailyWeather;