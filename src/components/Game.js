import React, { useEffect, useState } from "react";
import "../components/Game.css";
import { insertSnake } from "../game_logic/board";
import {
  INITIAL_DIRECTION,
  INITIAL_EMPTY_BOARD,
  INITIAL_SPEED,
} from "../game_logic/config.js";
import {
  checkWallCollision,
  move,
  setDirectionFromKeyboard,
} from "../game_logic/snake";

export default function Game() {
  let initialBoard = INITIAL_EMPTY_BOARD;
  const [snake, setSnake] = useState([
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ]);
  const initialCells = insertSnake(initialBoard.cells, snake);
  console.log("initialCells", initialCells);
  const [cells, setCells] = useState(initialCells);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      setDirectionFromKeyboard(setDirection)
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // move snake
      setSnake((prevSnake) => {
        const newSnake = move(prevSnake, direction);
        return newSnake;
      });
      // eat if needed
      // die if needed
      if (checkWallCollision(snake, initialBoard)) {
        alert("Wall Collision");
        clearInterval(interval);
        console.log("initialCells", initialCells);
        return setCells(initialCells);
      }
      // reset board
      setCells(initialCells);
    }, INITIAL_SPEED);

    return () => clearInterval(interval);
  });

  return (
    <div className="game" onClick={console.log}>
      <div className="grid">
        {cells.map((cell) => {
          return (
            <div
              key={cell.row.toString() + "-" + cell.col.toString()}
              className={
                cell.isHead
                  ? "gridItem is-head"
                  : cell.isTail
                  ? "gridItem is-tail"
                  : cell.isFood
                  ? "gridItem is-food"
                  : "gridItem"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
