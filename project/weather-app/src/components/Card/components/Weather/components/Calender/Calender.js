import React from "react";
import styles from "./Calender.module.scss";
import classNames from 'classnames/bind';
import {useSelector} from 'react-redux';
const cx = classNames.bind(styles);


const Calender = () => {
  const month = useSelector (state => state.date.month);
  const todate = useSelector (state => state.date.todate);
  const year = useSelector((state) => state.date.year);
  let dateContainer =[];
    console.log(month);
  switch (month) {
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
      // don't account for leap year
      for (let i = 1; i < 29; i++) {
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
  console.log(dateContainer);
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={cx("calendar")}>
          <div className={cx("month-indicator")}>
            <time dateTime="2020-05"> May {year} </time>
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
