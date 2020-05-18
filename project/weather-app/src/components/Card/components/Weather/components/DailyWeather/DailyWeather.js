import React from 'react';
import styles from './DailyWeather.module.scss';
import Icon from './components/Icon';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const DailyWeather =(props)=>{
  return (
    <div className={cx("weatherBox", props.className,{"last":props.last})}>
      <div className={cx("day")}>{props.Date}</div>
      <Icon href={props.href} />
      <div className={styles.temperature}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faThermometerHalf} />
        </div>
        <div className={styles.value}>
          <p>{props.temp[0] + "℃"}</p>
          <p>{props.temp[1] + "℃"}</p>
        </div>
      </div>
    </div>
  );
}


export default DailyWeather;