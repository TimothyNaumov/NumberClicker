import { useEffect } from "react";
import { push, ref, set } from "firebase/database";
import { database, serverStamp } from "../Firebase";
import {
  browserName,
  browserVersion,
  deviceType,
  osName,
  osVersion,
  mobileVendor,
  mobileModel,
} from "react-device-detect";

function writeScore(score: number) {
  const db = database;
  const scoresRef = ref(db, "scores/");
  const newScoreRef = push(scoresRef);

  const timestamp = serverStamp.now();

  const deviceInfo = {
    browserName,
    browserVersion,
    deviceType,
    osName,
    osVersion,
    mobileVendor,
    mobileModel,
  };

  set(newScoreRef, {
    score: score,
    timestamp: timestamp,
    deviceInfo: deviceInfo,
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
