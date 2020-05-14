import React from 'react';
import styles from "./Control.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMap } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane} from "@fortawesome/free-regular-svg-icons";



const Control =(props)=>{
  return (
    <a className={styles.wrapper} onClick={props.onClick}>
      <div className={styles.plus}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <span className={styles.text}>Add to favourite</span>
      <span className={styles.plane}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </span>
      <span className={styles.map}>
        <FontAwesomeIcon icon={faMap} />
      </span>
    </a>
  );
}

export default Control;