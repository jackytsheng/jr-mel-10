import React from "react";
import styles from "./Favorite.module.scss";
import Record from "./components/Record";
import Control from './components/Control';

class Favorite extends React.Component {
  constructor(props){
    super(props);
    this.state={
      itemCount:0,
      list:[],
    }
  }
  addItem(location,tempMax,tempMin,weather){
    if(this.state.itemCount >= 4){
      return;
    }
    const list = [...this.state.list];
      list.unshift({
        location,
        tempMax,
        tempMin,
        weather,
        id:JSON.stringify(Date.now()),
      })
    this.setState({list, itemCount:list.length});
  }
  removeItem(id){
    const list = [...this.state.list];
    const newList = list.filter(item => item.id !== id);
    // console.log(list);
    this.setState({ list:newList, itemCount: list.length });
  }
  renderItem(){
    const list = [...this.state.list];
    const removeItem = this.removeItem.bind(this);
    const renderItem = list.map((item) => (
      <Record
        onClick={() => removeItem(item.id)}
        location={item.location}
        temp={[item.tempMin, item.tempMax]}
        weather={item.weather}
        key={item.id}
      />
    ));
    return renderItem;
  }
  render(){
    const addItem = this.addItem.bind(this);
    
    const itemId=this.state.itemCount;
  return (
    <div className={styles.wrapper}>
      <Control onClick={() => addItem("melbourne", 5, 7.22, Date.now(), 0)} />
      {this.renderItem()}
    </div>
  );
}
};

export default Favorite;
