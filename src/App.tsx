import "./App.css";
import ButtonField from "./features/ButtonField";
import { Button, Grid, Typography } from "@mui/material";
import { useGameState } from "./hooks/useGameState";

function App() {
  const gameState = useGameState();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Typography variant="h1">{gameState.randomNumber}</Typography>
        </Grid>
        <Grid item>
          <ButtonField gameState={gameState} />
        </Grid>
        <Grid item>
          {gameState.endGameState === "WON" ||
            (gameState.endGameState === "LOSE" && (
              <Button
                color="primary"
                variant="contained"
                onClick={gameState.resetGame}
              >
                Play Again
              </Button>
            ))}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
