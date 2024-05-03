/* eslint-disable react/prop-types */

import { useState } from "react";
import {
  determineRockTypeMano,
  questionsMano,
  determineRockTypeDelgado,
  questionsDelgado,
} from "../../assets/js/rockgame";
import Rockcard from "../Rockcard";
import styles from "./Game.module.css";

function Game({ gametype, resetGame }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  //Muestra de mano
  const [answersmano, setAnswersmano] = useState([]);
  //Seccion delgada
  const [answersdelgado, setAnswersdelgado] = useState([]);

  //muestra de mano
  const handeAnswerMano = (answer) => {
    setAnswersmano([...answersmano, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    //Vítreo just have Obsidian
    if (answer == "Vítreo") {
      setCurrentQuestionIndex(questionsMano.length);
    }
  };

  //Seccion delgada
  const handeAnswerDelgado = (answer) => {
    setAnswersdelgado([...answersdelgado, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
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
  } else {
    if (currentQuestionIndex >= questionsDelgado.length) {
      const rockType = determineRockTypeDelgado(answersdelgado);
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
            
            <div className="gameDelgada__title">
              {questionsDelgado[currentQuestionIndex].question}
            </div>
            <br />
            <div className={styles.gameDelgada__options}>
              {questionsDelgado[currentQuestionIndex].answers.map(
                (answer, index) => (
                  <button
                    className={styles.gameDelgada__option}
                    key={index}
                    onClick={() => handeAnswerDelgado(answer)}
                  >
                    {answer}
                  </button>
                )
              )}
            </div>
            Sigue en desarrollo...
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
