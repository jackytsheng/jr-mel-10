import React from 'react';
import styles from './Icon.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const iconChoicer =(href)=>{
  switch (href) {
    case "sun-shower":
      return (
        <div className={cx("icon", "sun-shower")}>
          <div className={cx("cloud")}></div>
          <div className={cx("sun")}>
            <div className={cx("rays")}></div>
          </div>
          <div className={cx("rain")}></div>
        </div>
      );
    case "thunder-storm":
      return (
        <div className={cx("icon", "thunder-storm")}>
          <div className={cx("cloud")}></div>
          <div className={cx("lightning")}>
            <div className={cx("bolt")}></div>
            <div className={cx("bolt")}></div>
          </div>
        </div>
      );
    case "cloudy":
      return (
        <div className={cx("icon","cloudy")}>
          <div className={cx("cloud")}></div>
          <div className={cx("cloud")}></div>
        </div>
      );
    case "flurries":
      return (
        <div className={cx("icon", "flurries")}>
          <div className={cx("cloud")}></div>
          <div className={cx("snow")}>
            <div className={cx("flake")}></div>
            <div className={cx("flake")}></div>
          </div>
        </div>
      );
    case "sunny":
      return (
        <div className={cx("icon", "sunny")}>
          <div className={cx("sun")}>
            <div className={cx("rays")}></div>
          </div>
        </div>
      );
    case "rainy":
      return (
        <div className={cx("icon","rainy")}>
        <div className={cx("cloud")}></div>
        <div className={cx("rain")}></div>
      </div>
      );
   
  }
}
const Icon = (props) => <div className={styles.wrapper}>{iconChoicer(props.href)}</div>;

export default Icon;

