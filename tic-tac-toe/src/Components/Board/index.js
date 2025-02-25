import Swal from "sweetalert2";
import confetti from "canvas-confetti";

import Button from '../Button'
import { calculateWinner } from './utils';

import "./styles.css";

const Board = ({ xIsNext, squares, onPlay, resetGame }) => {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    setTimeout(() => {
      launchConfetti();   
    }, 200);
    setTimeout(() => {
      showWinAlert(winner);
    }, 1000);
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Confetti Effect 🎊
  const launchConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.2 }, // Starts from the top
    });
  };

  // Show SweetAlert 🏆
  const showWinAlert = (winner) => {
    Swal.fire({
      title: `🎉 Player ${winner} Wins!`,
      text: "Click OK to restart the game",
      icon: "success",
      confirmButtonText: "Restart",
      allowOutsideClick: false,
      showCloseButton: true,
    }).then(() => resetGame()); // Restart game on alert close
  };

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Button
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        />
        <Button
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        />
        <Button
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        />
      </div>
      <div className="board-row">
        <Button
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        />
        <Button
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        />
        <Button
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        />
      </div>
      <div className="board-row">
        <Button
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        />
        <Button
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        />
        <Button
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        />
      </div>
    </>
  );
};

export default Board