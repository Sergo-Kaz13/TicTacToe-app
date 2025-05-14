import { useEffect, useState } from "react";
import "./App.css";
import GameBoard from "./Components/GameBoard";
import GameInfo from "./Components/GameInfo";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [user, setUser] = useState("X");

  console.log(["board"], board);

  const onClick = (index) => {
    if (board[index]) return;

    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[index] = user;
      return newBoard;
    });

    setUser((prevUser) => (prevUser === "X" ? "O" : "X"));

    console.log(`Player ${user} placed on index ${index}`);
  };

  useEffect(() => {
    const result = checkWinner(board);

    if (result) {
      console.log(["result"], result);
    }
  }, [board]);

  function checkWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <GameInfo user={user} />
      <GameBoard board={board} onClick={onClick} />
    </div>
  );
}

export default App;
