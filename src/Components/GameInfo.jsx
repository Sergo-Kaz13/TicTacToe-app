import React from "react";

const GameInfo = ({ user }) => {
  const stylesUser = {
    base: "text-lg font-semibold",
    player: "text-2xl text-yellow-500",
  };

  return (
    <h2 className={`${stylesUser.base}`}>
      Гравець <span className={`${stylesUser.player}`}>{user}</span>
    </h2>
  );
};

export default GameInfo;
