import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { changeLocation,typing } from './action';


const Search =(props) => {
    const location = useSelector((state) => state.word);
    const dispatch = useDispatch();
    return (
      <form
        className={styles.wrapper}
        onSubmit={(event) => dispatch(changeLocation(event, location))}
      >
        <div className={styles.field}>
          <input
            type="text"
            placeholder="Search"
            onChange={(event) => dispatch(typing(event))}
          />
        </div>
        <button type="submit" className={styles.icon}>
          <FontAwesomeIcon icon={faSearchLocation} />
        </button>
      </form>
    );
}

export default Search;
