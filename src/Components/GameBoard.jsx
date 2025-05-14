import React from "react";
import Cell from "./Cell";

const GameBoard = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3 w-48 h-48">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onClick(index)} />
      ))}
      <h1>GameBoard</h1>
    </div>
  );
};

export default GameBoard;
