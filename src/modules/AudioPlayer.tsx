import { useContext, useEffect } from "react";

import win from "../sounds/win.mp3";
import lose from "../sounds/lose.mp3";
import { VolumeContext } from "../context/VolumeContext";
import { playSoundWithInterruption } from "../utils/audio.utils";

const winSound = new Audio(win);
const loseSound = new Audio(lose);

const AudioPlayer = ({ gameState }: any) => {
  const { volume } = useContext(VolumeContext);
  useEffect(() => {
    if (gameState.endGameState === "WIN") {
      playSoundWithInterruption(winSound, volume);
    } else if (gameState.endGameState === "LOSE") {
      playSoundWithInterruption(loseSound, volume);
    }
  }, [gameState]); // This effect will run every time `endGameState` changes

  return null; // This component does not render anything to the UI
};

export default AudioPlayer;
