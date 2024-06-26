/* eslint-disable react/prop-types */

import { useState } from "react";
import { determineRockTypeMano, questionsMano } from "../../assets/js/rockgame";
import Rockcard from "../Rockcard";
import styles from "./Game.module.css";
import DelgadoFelsico from "../Delgado/DelgadoFelsico";
import DelgadoMafico from "../Delgado/DelgadoMafico";

function Game({ gametype, resetGame }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  //Muestra de mano
  const [answersmano, setAnswersmano] = useState([]);
  //Seccion delgada
  const [delgadotype, setdelgadotype] = useState(null);

  //muestra de mano
  const handeAnswerMano = (answer) => {
    setAnswersmano([...answersmano, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    //Vítreo just have Obsidian
    if (answer == "Vítreo") {
      setCurrentQuestionIndex(questionsMano.length);
    }
  };

  if (gametype == 1) {
    if (currentQuestionIndex >= questionsMano.length) {
      const rockType = determineRockTypeMano(answersmano);
      return (
        <>
          <Rockcard rock={rockType} />
          <button onClick={resetGame}>Volver a jugar</button>
        </>
      );
    }
  }
  return (
    <>
      <div className="cont">
        <div className="gametype"></div>
        {gametype == 1 ? (
          <div className="gameMano">
            <div className="gameMano__title">
              {questionsMano[currentQuestionIndex].question}
            </div>
            <br />
            <div className={styles.gameMano__options}>
              {questionsMano[currentQuestionIndex].answers.map(
                (answer, index) => (
                  <button
                    className={styles.gameMano__option}
                    key={index}
                    onClick={() => handeAnswerMano(answer)}
                  >
                    {answer}
                  </button>
                )
              )}
            </div>
          </div>
        ) : (
          <div className="gameDelgada">
            {delgadotype === null ? (
              <>
                <button onClick={() => setdelgadotype(1)}>Felsico</button>
                <button onClick={() => setdelgadotype(2)}>Mafico</button>
              </>
            ) : delgadotype === 1 ? (
              <DelgadoFelsico resetGame={resetGame}/>
              
            ) : (
              <DelgadoMafico resetGame={resetGame}/>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
