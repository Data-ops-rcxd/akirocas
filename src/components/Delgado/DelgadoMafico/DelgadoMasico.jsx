/* eslint-disable react/prop-types */
import { useState } from "react";
import Rockcard from "../../Rockcard";
import { determineRockTypeDelgadoMafico } from "../../../assets/js/rockgame";

const DelgadoMafico = ({ resetGame }) => {
  const [gameMode, setGameMode] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);
  const [check, setCheck] = useState(false);

  const handleGameMode = (mode) => {
    setGameMode(mode);
  };

  const handlecheck = () => {
    setCheck(true);
  };

  const handleSliderChange = (event) => {
    const value = parseInt(event.target.value);
    switch (event.target.name) {
      case "slider1":
        setPercentage1(value);
        break;
      case "slider2":
        setPercentage2(value);
        break;
      case "slider3":
        setPercentage3(value);
        break;
      default:
        break;
    }
  };

  if (check) {
    const rockType = determineRockTypeDelgadoMafico(
      gameMode,
      percentage1,
      percentage2,
      percentage3
    );

    return (
      <>
        <Rockcard rock={rockType} />
        <button onClick={resetGame}>Volver a jugar</button>
      </>
    );
  }

  return (
    <div>
      <h3>Delgado Mafico</h3>
      {gameMode === null ? (
        <>
          <button onClick={() => handleGameMode("Con Anfibol")}>
            Con Anfibol
          </button>
          <button onClick={() => handleGameMode("Sin Anfibol")}>
            Sin Anfibol
          </button>
        </>
      ) : (
        <>
          <div>Presencia de Anfibol: {gameMode}</div>
          <div>
            <label>Olivino {percentage1}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage1}
              onChange={handleSliderChange}
              name="slider1"
            />
          </div>
          <div>
            <label>
              {gameMode === "Con Anfibol" ? "Piroxeno" : "Clinopiroxeno"}{" "}
              {percentage2}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage2}
              onChange={handleSliderChange}
              name="slider2"
            />
          </div>
          <div>
            <label>
              {gameMode === "Con Anfibol" ? "Hornblenda" : "Ortopiroxeno"}{" "}
              {percentage3}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage3}
              onChange={handleSliderChange}
              name="slider3"
            />
          </div>
          <button onClick={() => handlecheck()}>Check</button>
        </>
      )}
    </div>
  );
};

export default DelgadoMafico;
