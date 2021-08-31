import React from "react";
import ItemCom from "./ItemCom";
import classes from "./Comment.module.css";

const Comment = () => {
  return (
    <div className={classes.areaComment}>
      <ItemCom />
    </div>
  );
};

export default Comment;
