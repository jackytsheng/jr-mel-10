import React from "react";
import styles from "./Favorite.module.scss";
import Record from "./components/Record";
import Control from './components/Control';
import {connect} from 'react-redux';
import {saveLocation,deleteLocation } from './action';


class Favorite extends React.Component {
  
  renderItem(){
    const list = this.props.renderList;
    const dispatch = this.props.dispatch;
 
    
    const renderItem = list.map((item) => (
      <Record
        onClick={() => dispatch(deleteLocation(item.id))}
        location={item.location}
        temp={[item.tempMin, item.tempMax]}
        weather={item.weather}
        key={item.id}
      />
    ));
    return renderItem;
  }
  render(){
    const dispatch = this.props.dispatch;
    const location = this.props.location;
    const length = this.props.renderList.length;
    const Weather = this.props.weather;
    const date = new Date();
    const todayWeather = Weather[date.getDay()];
    const { tempMin, tempMax, weather } = todayWeather;
  return (
    <div className={styles.wrapper}>
      <Control
        onClick={() =>
          length < 4
            ? dispatch(saveLocation(location, tempMin, tempMax, weather))
            : undefined
        }
      />
      {this.renderItem()}
    </div>
  );
}
};
const mapStateToProps = (state) => ({
    renderList : state.favourite,
    location : state.location,
    weather: state.weather,
  });

export default connect( mapStateToProps)(Favorite);
