import "./App.css";
import ButtonField from "./features/ButtonField";
import { Grid, Typography } from "@mui/material";
import { useGameState } from "./hooks/useGameState";
import ResetButton from "./features/ResetButton";
import NumberBox from "./features/NumberBox";

function App() {
  const gameState = useGameState();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
        minHeight="300px"
      >
        <Grid item>
          <NumberBox gameState={gameState} />
        </Grid>
        <Grid item>
          <ButtonField gameState={gameState} />
        </Grid>
        <Grid item>
          <ResetButton gameState={gameState} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
