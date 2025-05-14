import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <button
      className="border w-16 h-16 text-2xl hover:bg-black hover:text-white"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
