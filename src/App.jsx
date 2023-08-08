import "./style.scss";
import { useState } from "react";
import { calculatewinner } from "./components/winner";
import Board from "./components/Board.jsx";
import Message from "./components/message";
function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXturn, setXturn] = useState(true);
  //   console.log(square);
  const winner = calculatewinner(square);

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
  const resetgame = () => {
    setSquare(Array(9).fill(null));
  };

  return (
    <>
      <div className="app">
        <Message square={square} winner={winner} isXturn={isXturn} />
        <Board square={square} handleClick={handleClick} />
        <button
          className={`btn-reset ${winner ? "active" : ""}`}
          type="button"
          onClick={resetgame}
        >
          Start new game
        </button>
      </div>
    </>
  );
}

export default App;
