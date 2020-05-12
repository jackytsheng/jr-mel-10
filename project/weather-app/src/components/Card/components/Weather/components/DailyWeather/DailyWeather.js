import React from 'react';
import styles from './DailyWeather.module.scss';
import classNames from 'classnames';

class DailyWeather extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      tempMax: "10",
      tempMin: "10",
    }
  }
  render(){
  const currentLocation ="heathmont,melbourne";
  const adr = `http://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=59f50906ffa57b3737627dd27793aedc&units=metric`;
  let weatherData = {};
  
  // fetch(adr)
  // .then((response) => response.json())
  // .then((data) => {
  //   this.setState({tempMax:data.main.temp_max})
  // });

  return (
    <div className={styles.weatherBox}>
      {this.state.tempMax}
    </div>
  );
}
}


export default DailyWeather;