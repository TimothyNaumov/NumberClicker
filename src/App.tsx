import "./App.css";
import ButtonField from "./features/ButtonField";
import { Grid, Typography } from "@mui/material";
import { useGameState } from "./hooks/useGameState";

// function listIsSorted(array: number[]) {
//   // 👇️ check if array is sorted in ascending order
//   let prevValue = null;
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] !== "undefined") {
//       if (prevValue !== null && array[i] < prevValue) {
//         return false;
//       }
//       prevValue = array[i];
//     }
//   }
//   return true;
// }

// function checkGameOver(array: number[]) {
//   for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === "undefined") {
//       return false;
//     }
//   }
//   return true;
// }

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
      </Grid>
    </>
  );
}

export default App;
