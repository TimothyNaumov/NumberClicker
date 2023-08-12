import { useEffect } from "react";
import { push, ref, set } from "firebase/database";
import { database } from "../Firebase";

function writeScore(score: number) {
  const db = database;
  console.log(db);
  console.log(`trying to write ${score}`);
  const scoresRef = ref(db, "scores/");
  const newScoreRef = push(scoresRef);
  set(newScoreRef, { score: score }).catch((error) => {
    console.error("Error writing score:", error);
  });
}

const ScoreLogger = ({ gameState }: any) => {
  useEffect(() => {
    console.log(gameState);
    if (gameState.endGameState === "WIN") {
      console.log("writing perfect score to database");
      writeScore(gameState.score);
    } else if (gameState.endGameState === "LOSE") {
      console.log("writing " + gameState.score + " to database");
      writeScore(gameState.score);
    }
  }, [gameState]); // This effect will run every time `endGameState` changes

  return null; // This component does not render anything to the UI
};

export default ScoreLogger;
