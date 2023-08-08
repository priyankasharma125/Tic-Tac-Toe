const Square = ({ value, onClick, isWinningSquare }) => {
  const valueClassname = value === "X" ? "text-green" : "text-orange";
  const winningClassname = isWinningSquare ? "winning" : " ";
  return (
    <button
      type="button"
      className={`square ${valueClassname} ${winningClassname}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
