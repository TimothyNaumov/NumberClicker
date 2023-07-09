import { Typography } from "@mui/material";

export const NumberBox = ({ gameState }: any) => {
  if (gameState.endGameState === "WIN") {
    return (
      <Typography variant="h1" color="success">
        You Won!
      </Typography>
    );
  } else if (gameState.endGameState === "LOSE") {
    return (
      <Typography variant="h1" color="error">
        {gameState.randomNumber}
      </Typography>
    );
  }
  return <Typography variant="h1">{gameState.randomNumber}</Typography>;
};

export default NumberBox;
