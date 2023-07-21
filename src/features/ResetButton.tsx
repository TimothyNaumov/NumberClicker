import { Button, IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import shuffle from "../sounds/shuffle.mp3";
import { playSoundWithInterruption } from "../utils/audio.utils";

const shuffleSound = new Audio(shuffle);
shuffleSound.load();

export const ResetButton = ({ gameState }: any) => {
  function handleClick() {
    gameState.resetGame();
    playSoundWithInterruption(shuffleSound);
  }

  if (gameState.endGameState === "WIN" || gameState.endGameState === "LOSE") {
    return (
      <Button color="primary" variant="contained" onClick={handleClick}>
        Play Again
      </Button>
    );
  }

  return (
    <IconButton onClick={handleClick}>
      <ReplayIcon color="inherit" />
    </IconButton>
  );
};

export default ResetButton;
