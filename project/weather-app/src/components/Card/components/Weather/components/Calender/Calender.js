import React from "react";
import styles from "./Calender.module.scss";
import classNames from 'classnames/bind';
import {useSelector} from 'react-redux';
const cx = classNames.bind(styles);

const calenderGenerator=(todate,month,year)=>{
  let dateContainer = [];
  switch (month+1) {
    case 4:
    case 6:
    case 9:
    case 11:
      for (let i = 1; i < 31; i++) {
        dateContainer.push(
          <button className={i === todate ? cx("today") : ""} key={i}>
            <time>{i}</time>
          </button>
        );
      }
      break;

    case 2:
      let thisYear = new Date(year,3,0);
      let febDays = thisYear.getDate();
      for (let i = 1; i < febDays; i++) {
        dateContainer.push(
          <button className={i === todate ? cx("today") : ""} key={i}>
            <time>{i}</time>
          </button>
        );
      }
      break;
    default:
      for (let i = 1; i < 32; i++) {
        dateContainer.push(
          <button className={i === todate ? cx("today") : ""} key={i}>
            <time>{i}</time>
          </button>
        );
      }
  }
  return dateContainer;
}
const monthFiller=(year,month)=>{
  let date = new Date(year,month,1);
  let firstDay = date.getDay();
  let fillerArray = [];
  for (let i =0; i<firstDay;i++){
    fillerArray.push(
      <button key={"filler " + i} className={cx("filler")}></button>
    );
  }
  return fillerArray;
}

const Calender = () => {
  const monthData = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
  const month = useSelector (state => state.date.month);
  const todate = useSelector (state => state.date.todate);
  const year = useSelector((state) => state.date.year);
  let dateContainer = calenderGenerator(todate,month,year); 

  dateContainer.unshift(...monthFiller(year,month));

  return (
    <div className={styles.wrapper}>
      <main>
        <div className={cx("calendar")}>
          <div className={cx("month-indicator")}>
            <time dateTime="2020-05"> {monthData[month]} {year} </time>
          </div>
          <div className={cx("day-of-week")}>
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className={cx("date-grid")}>{dateContainer}</div>
        </div>
      </main>
    </div>
  );
};



export default Calender;
