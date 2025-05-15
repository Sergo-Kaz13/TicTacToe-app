import React from "react";

const Cell = ({ value, onClick }) => {
  const stylesCell = {
    base: "border w-16 h-16 text-2xl cursor-pointer",
    hover: "hover:bg-lime-400 hover:text-white",
  };

  return (
    <button
      className={`${stylesCell.base} ${stylesCell.hover}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Cell;
