import React from "react";
import userIcon from "../../public/assets/user_icon-icons.com_57997.png";

const GameInfo = ({ user }) => {
  const stylesUser = {
    base: "text-lg font-semibold inline-flex items-center gap-5",
    player: "text-3xl text-blue-700",
    userIcon: `h-5`,
    userBlock: "inline-flex items-center gap-1",
  };

  return (
    <h2 className={`${stylesUser.base}`}>
      <span className={`${stylesUser.userBlock}`}>
        <img className={`${stylesUser.userIcon}`} src={userIcon} alt="user" />
        Гравець
      </span>
      <span className={`${stylesUser.player}`}>{user}</span>
    </h2>
  );
};

export default GameInfo;
