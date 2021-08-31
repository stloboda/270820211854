import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.avatar}>
        <img src="/images/avatar.png" />
      </div>
      <div className={classes.name}>
        <h4>Вероника Ростова</h4>
        <p className={classes.nameP}>Менеджер по продажам</p>
      </div>
      <div className={classes.aboutDiscription}>
        <p className={classes.aboutDiscriptionP}>
          Подберу для вас самые лучшие предложения.<br></br> Мои услуги
          абсолютно бесплатны
        </p>
      </div>
    </div>
  );
};

export default Header;
