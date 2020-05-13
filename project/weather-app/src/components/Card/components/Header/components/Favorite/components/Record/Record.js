import React from 'react';
import styles from './Record.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


const Record =()=>{
  return (
    <a className={styles.wrapper}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <span></span>
    </a>
  );
}

export default Record;