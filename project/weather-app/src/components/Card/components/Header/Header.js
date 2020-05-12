import React from 'react';
import styles from './Header.module.scss';
import Content from './components/Content';
import Favorite from "./components/Favorite";
import Search from "./components/Search";

const Header = () =>{
  return (
    <div className={styles.wrapper}>
      <Search />
      <Content />
      <Favorite />
    </div>
  );
}


export default Header;