import React from 'react';
import styles from './App.module.scss';
import Nav from '../Nav';
import Control from "../Control";
import Card from "../Card";


 const App= () => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <Control />
      <Card />
    </div>
  );
 };

export default App;
