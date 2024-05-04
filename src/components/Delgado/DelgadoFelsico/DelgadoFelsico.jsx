/* eslint-disable react/prop-types */
import { useState } from "react";
import { determineRockTypeDelgadoFelsico } from "../../../assets/js/rockgame";
import Rockcard from "../../Rockcard";

const DelgadoFelsico = ({ resetGame }) => {
  const [gameMode, setGameMode] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [check, setCheck] = useState(false);

  const handleGameMode = (mode) => {
    setGameMode(mode);
  };

  const handleSliderChange = (event) => {
    const value = event.target.value;
    if (event.target.name === "slider1") {
      setPercentage1(value);
    } else {
      setPercentage2(value);
    }
  };

  const handlecheck = () => {
    setCheck(true);
  };

  if (check) {
    const rockType = determineRockTypeDelgadoFelsico(
      gameMode,
      percentage1,
      percentage2
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
      <h3>Delgado Felsico</h3>
      {gameMode === null ? (
        <>
          <div>Selecciona el tipo de textura</div>
          <button onClick={() => handleGameMode("Intrusivo")}>Intrusivo</button>
          <button onClick={() => handleGameMode("Extrusivo")}>Extrusivo</button>
        </>
      ) : (
        <>
          <div>Tipo de textura selecciónada: {gameMode}</div>
          <div>
            <label>Plagioclasa {percentage1}%</label>
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
            <label>Cuarzo {percentage2}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage2}
              onChange={handleSliderChange}
              name="slider2"
            />
          </div>
          <button onClick={() => handlecheck()}>Check</button>
        </>
      )}
    </div>
  );
};

export default DelgadoFelsico;
