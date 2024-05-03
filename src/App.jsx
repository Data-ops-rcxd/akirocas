import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [gameType, setGameType] = useState(null);

  const resetGame = () => {
    setGameType(null);
  };

  return (
    <>
      <div className="title">Akirocas</div>
      <div className="about">Te haré unas preguntas, trataré de saber la Roca:</div>
      <br />
      {!gameType && (
        <div className="cont">
          <button onClick={() => setGameType(1)}>Muestra de mano</button>
          <button onClick={() => setGameType(2)}>Seccion delgada</button>
        </div>
      )}
      {gameType && <Game gametype={gameType} resetGame={resetGame} />}
    </>
  );
}
export default App;
