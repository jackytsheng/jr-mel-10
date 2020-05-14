import React from 'react';
import styles from './Record.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow} from "@fortawesome/free-solid-svg-icons";


const Record =(props)=>{
  return (
    <a className={styles.wrapper} onClick={props.onClick}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faLocationArrow} />
      </div>
      <div className={styles.textField}>
        <div className={styles.location}>{props.location.toUpperCase()} </div>
        <div className={styles.temp}>
          {props.temp[1] + "℃" + " / " + props.temp[0] + "℃"}
        </div>
        <div className={styles.weather}>{"Item Key:"+props.weather}</div>
      </div>
    </a>
  );
}

export default Record;