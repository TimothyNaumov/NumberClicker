import { Button, IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

export const ResetButton = ({ gameState }: any) => {
  if (gameState.endGameState === "WIN" || gameState.endGameState === "LOSE") {
    return (
      <Button color="primary" variant="contained" onClick={gameState.resetGame}>
        Play Again
      </Button>
    );
  }

  return (
    <IconButton onClick={gameState.resetGame}>
      <ReplayIcon color="inherit" />
    </IconButton>
  );
};

export default ResetButton;
