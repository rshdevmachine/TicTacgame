import React from "react";
import "./TicTacToe.css";

const TicTacToe = ({ value, onClick }) => {
  //assigning clss name depending on the value
  const style = value === "X" ? "box x" : "box o";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default TicTacToe;