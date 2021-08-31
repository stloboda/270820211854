import React from "react";
import classes from "./CountPath.module.css";

const CountPath = () => {
  return (
    <div className={classes.counter}>
      <div className={classes.count}>
        <p>Услуг</p>
      </div>
      <hr className={classes.lineCounter} />
      <div className={classes.graphicCounter}>
        <hr className={classes.verticalLine} />
        <div className={classes.graphicCounterFirst}>
          <p className={classes.FirstText}>Ручное бронирование</p>
        </div>
        <div className={classes.graphicCounterSecond}>
          <p className={classes.SecondText}>Пакетные туры</p>
        </div>
        <div className={classes.graphicCounterThird}>
          <p className={classes.ThirdText}>Отели</p>
        </div>
        <ul className={classes.values}>
          <li className={classes.valueFirstItem}>11</li>
          <li className={classes.valueSecondItem}>3</li>
          <li className={classes.valueThirdItem}>1</li>
        </ul>
      </div>
      <hr className={classes.lineCounterEnd} />
      <div className={classes.total}>
        <div className={classes.totalItems}>
          <h4>Всего</h4>
        </div>
        <div className={classes.totalValue}>
          <h4>15</h4>
        </div>
      </div>
    </div>
  );
};

export default CountPath;
