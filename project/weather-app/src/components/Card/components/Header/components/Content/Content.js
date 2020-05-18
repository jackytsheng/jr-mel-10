import React from "react";
import styles from "./Content.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Au from './img/au.svg';
import {useSelector} from 'react-redux';

const Content = () => {
  const location = useSelector(state => state.location );
  return (
    <div className={styles.wrapper}>
      <div className={styles.location}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className={styles.place}> {location?location[0].toUpperCase()+ location.slice(1).toLowerCase():""} </div>
        <img className={styles.logo} src={Au} />
      </div>
      <figure>
        <img src="https://c4.wallpaperflare.com/wallpaper/182/350/377/princes-bridge-on-yarra-river-melbourne-city-blue-hour-panorama-melbourne-australia-ultra-hd-wallpapers-and-laptop-3840%C3%972160-wallpaper-preview.jpg" />
      </figure>
    </div>
  );
};

export default Content;
