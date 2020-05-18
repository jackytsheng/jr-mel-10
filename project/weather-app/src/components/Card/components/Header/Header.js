import React from 'react';
import styles from './Header.module.scss';
import Content from './components/Content';
import Favorite from "./components/Favorite";
import Search from "./components/Search";
import { useSelector } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Search />
        <Content />
        <Favorite />
      </div>
    );
  }
}


export default Header;