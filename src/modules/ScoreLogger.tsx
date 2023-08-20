import { useEffect } from "react";
import { push, ref, set } from "firebase/database";
import { database, serverStamp } from "../Firebase";

function writeScore(score: number) {
  const uid = localStorage.getItem("user_uid");
  if (!uid) {
    console.log("ERROR: Invalid UID - score not logged");
    return;
  }

  const db = database;
  const scoresRef = ref(db, `users/${uid}/scores`);
  const newScoreRef = push(scoresRef);

  const timestamp = serverStamp.now();

  set(newScoreRef, {
    score: score,
    timestamp: timestamp,
  }).catch((error) => {
    console.error("Error writing score:", error);
  });
}

const ScoreLogger = ({ gameState }: any) => {
  useEffect(() => {
    if (gameState.endGameState === "WIN") {
      writeScore(gameState.score);
    } else if (gameState.endGameState === "LOSE") {
      writeScore(gameState.score);
    }
  }, [gameState]); // This effect will run every time `endGameState` changes

  return null; // This component does not render anything to the UI
};

export default ScoreLogger;
