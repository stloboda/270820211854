import React from "react";
import CommentsItem from "./SendComments/MyComments";
import classes from "./Comments.module.css";
import MyComments from "./SendComments/MyComments";

const Comments = () => {
  return (
    <div>
      <div className={classes.comment}>
        <div className={classes.lastComment}>
          <p>Последние отзывы</p>
        </div>
        <div className={classes.allComment}>
          <a href="">Все отзывы</a>
        </div>
        <div className={classes.likesValue}>
          <img className={classes.imgHeart} src="/icons/heart.png" />
        </div>
        <div className={classes.heartValue}>
          <p>131</p>
        </div>
        <div className={classes.chatValue}>
          <img className={classes.imgChat} src="/icons/chat.png" />
        </div>
        <div className={classes.chatTotal}>
          <p>14</p>
        </div>
      </div>
      <div>
        <MyComments />
      </div>
    </div>
  );
};

export default Comments;
