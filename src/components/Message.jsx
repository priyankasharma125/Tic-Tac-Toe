const Message = ({ winner, isXturn, square }) => {
  const noMovesleft = square.every((squareVal) => squareVal !== null);
  const nextplayer = isXturn ? "X" : "O";
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${nextplayer}`;
  const StatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesleft) {
      return (
        <>
          <span className="text-orange">O</span> and{" "}
          <span className="text-green">X</span> tied
        </>
      );
    }
    if (!winner && !noMovesleft) {
      return (
        <>
          Next player is{" "}
          <span className={isXturn ? "text-green" : "text-orange"}>
            {nextplayer}
          </span>
        </>
      );
    }
    return null;
  };
  return <h2 className="status-message">{StatusMessage()}</h2>;
};
export default Message;
