import React from "react";
import styles from "./Calender.module.scss";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Calender = () => {
  let isToday = false;
  const today= {"today":isToday};
  return (
    <div className={styles.wrapper}>
      <main>
        <div className={cx("calendar")}>
          <div className={cx("month-indicator")}>
            <time dateTime="2020-05"> May 2020 </time>
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
          <div className={cx("date-grid")}>
            <button className = {cx(today)}>
              <time dateTime="2020-05-01">1</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-02">2</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-03">3</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-04">4</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-05">5</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-06">6</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-07">7</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-08">8</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-09">9</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-10">10</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-11">11</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-12">12</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-13">13</time>
            </button>
            <button className = {styles.today}>
              <time dateTime="2020-05-14">14</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-15">15</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-16">16</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-17">17</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-18">18</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-19">19</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-20">20</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-21">21</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-22">22</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-23">23</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-24">24</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-25">25</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-26">26</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-27">27</time>
            </button>
            <button className = {cx(today)}>
              <time dateTime="2020-05-28">28</time>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calender;
