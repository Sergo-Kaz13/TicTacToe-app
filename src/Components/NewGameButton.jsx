import React from "react";

const NewGameButton = () => {
  const stylesButton = {
    base: "rounded-sm border-orange-950 outline-1 p-5 pt-1 pb-1 bg-cyan-500 text-white",
    hover: "hover:cursor-pointer hover:opacity-80",
  };

  return (
    <button className={`${stylesButton.base} ${stylesButton.hover}`}>
      Почати нову гру
    </button>
  );
};

export default NewGameButton;
