import React from "react";
import styles from "./Nav.module.scss";

const Nav = () => (
  <div className={styles.wrapper}>
    <div className={styles.threeLine}>
      <span className={styles.topLine}></span>
      <span className={styles.midLine}></span>
      <span className={styles.botLine}></span>
    </div>
  </div>
);

export default Nav;
