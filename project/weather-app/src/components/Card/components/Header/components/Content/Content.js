import React from "react";
import styles from "./Content.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux';

const Content = () => {
  const location = useSelector(state => state.location );
  const imgLink = useSelector((state) => state.imgLink);

  return (
    <div className={styles.wrapper}>
      <div className={styles.location}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <div className={styles.place}>
          {" "}
          {location
            ? location[0].toUpperCase() + location.slice(1).toLowerCase()
            : ""}{" "}
        </div>
      </div>
      <figure>
        <img src={imgLink} />
      </figure>
    </div>
  );
};

export default Content;
