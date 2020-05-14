import React from 'react';
import styles from './App.module.scss';
import Card from "../Card";


 const App= () => {
  return (
    <div className={styles.wrapper}>
      <Card />
      <footer> © Designed and created by Jiajin, 2020 </footer>
    </div>
  );
 };

export default App;
