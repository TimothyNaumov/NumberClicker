//import "../../App.css";
import ButtonField from "../../features/ButtonField";
import { Box, Grid } from "@mui/material";
import { useGameState } from "../../hooks/useGameState";
import ResetButton from "../../features/ResetButton";
import NumberBox from "../../features/NumberBox";
import AudioPlayer from "../../modules/AudioPlayer";
import ScoreLogger from "../../modules/ScoreLogger";
import UserScore from "../../features/UserScore";

function Game() {
  const gameState = useGameState();

  return (
    <>
      <AudioPlayer gameState={gameState} />
      <ScoreLogger gameState={gameState} />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        minHeight="60vh"
      >
        <Grid item width="100%">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="flex-start"
          >
            <UserScore color="primary" variant="h2" />
          </Box>
        </Grid>
        <Grid item>
          <NumberBox gameState={gameState} />
        </Grid>
        <Grid item mt={5}>
          <ButtonField gameState={gameState} />
        </Grid>
        <Grid item mt={5} minHeight="40px">
          <ResetButton gameState={gameState} />
        </Grid>
      </Grid>
    </>
  );
}

export default Game;
