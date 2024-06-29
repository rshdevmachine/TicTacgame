import React from "react";
import "./Board.css";
import TicTacToe from "./TicTacToe/TicTacToe";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((item, idx) => (
        <TicTacToe
          key={idx}
          value={item}
          onClick={() => item == null && onClick(idx)}
        />
      ))}
    </div>
  );
};

export default Board;