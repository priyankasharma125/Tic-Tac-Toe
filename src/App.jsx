import "./style.scss";
import { useState } from "react";
import { calculatewinner } from "./components/winner";
import Board from "./components/Board.jsx";

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  //   console.log(square);
  const winner = calculatewinner(square);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXturn ? "X" : "O"}`;
  const handleClick = (clickedPos) => {
    if (square[clickedPos] || winner) {
      return;
    }
    setSquare((clickedSquare) => {
      return clickedSquare.map((squareVal, index) => {
        if (clickedPos === index) {
          return isXturn ? "X" : "O";
        }
        return squareVal;
      });
    });
    setXturn((currentIsXturn) => !currentIsXturn);
    // console.log("clicked at", index);
  };

  return (
    <>
      <div className="app">
        <h2>{message}</h2>
        <Board square={square} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
