import React from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import { updateWeather,updateImg } from "./action";
import Card from "../Card";


class App extends React.Component {
  componentWillMount(){
    this.props.updateWeather(this.props.location);
    this.props.updateImg(this.props.location);
  }

  render(){
  return (
    <div className={styles.wrapper}>
      <Card />
      <footer> © Designed and created by Jiajin Zheng 2020 </footer>
    </div>
  );
}
 };

 const mapStateToProps = state => ({
   location: state.location,
 })

export default connect(mapStateToProps, {updateWeather,updateImg})(App);
