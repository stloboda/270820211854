import React from "react";
import classes from "./ItemCom.module.css";
import { useState } from "react";

const ItemCom = () => {
  const [comment, setComment] = useState([]);

  let myRef = React.createRef();

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);
    myRef.current.value = "";
  };

  return (
    <div>
      <ul className={classes.comItems}>
        {comment.map((item, index) => (
          <li className={classes.comItem} key={index.toString()}>
            {item}
          </li>
        ))}
      </ul>
      <div className={classes.sendArea}>
        <textarea ref={myRef} className={classes.placeText}></textarea>
        <button onClick={addComment} className={classes.btnSend}>
          Написать консультанту
        </button>
      </div>
    </div>
  );
};

export default ItemCom;
