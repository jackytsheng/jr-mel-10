import React from "react";
import styles from "./Weather.module.scss";
import classNames from 'classnames';
import DailyWeather from './components/DailyWeather';
import Calender from "./components/Calender";
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
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather:"",
      tempMin:5,
      tempMax:7.22,
    };
  }

  fetchData(){
    // fetch(adr)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       weather: data.weather[0].main,
    //       tempMax: data.main.temp_max,
    //       tempMin: data.main.temp_min,
    //     });
    //   });
  }
  render() {
    this.fetchData();
    const tempMax = this.state.tempMax;
    const tempMin = this.state.tempMin;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <DailyWeather
            Date={"Sun"}
            href={weatherIcon.sunShower}
            temp={[6, 12]}
          />
          <DailyWeather
            Date={"Mon"}
            href={weatherIcon.thunderStorm}
            temp={[4, 13]}
          />
          <DailyWeather
            Date={"Tue"}
            href={weatherIcon.flurries}
            temp={[8, 16]}
          />
          <DailyWeather Date={"Wed"} href={weatherIcon.sunny} temp={[4, 12]} />
          <DailyWeather
            Date={"Thu"}
            href={weatherIcon.cloudy}
            temp={[tempMin, tempMax]}
            className={"today"}
          />
          <DailyWeather Date={"Fri"} href={weatherIcon.rainy} temp={[5, 14]} />
          <DailyWeather
            Date={"Sat"}
            href={weatherIcon.sunny}
            className={"last"}
            temp={[5, 17]}
          />
        </div>
        <Calender />
      </div>
    );
  }
}

export default Weather;