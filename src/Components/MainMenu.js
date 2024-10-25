import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setGameState("Quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
