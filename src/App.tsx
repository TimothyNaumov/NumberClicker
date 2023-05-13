import "./App.css";
import ButtonField from "./features/ButtonField";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function listIsSorted(array: number[]) {
  // 👇️ check if array is sorted in ascending order
  let prevValue = null;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "undefined") {
      if (prevValue !== null && array[i] < prevValue) {
        return false;
      }
      prevValue = array[i];
    }
  }
  return true;
}

function App() {
  const [randomNumber, setRandomNumber] = React.useState(
    randomNumberInRange(1, 100)
  );
  const [sortedList, setSortedList] = React.useState(Array(10).fill(undefined));

  const createNewRandomNumber = () => {
    setRandomNumber(randomNumberInRange(1, 100));
  };

  const handlePlay = (i: number) => {
    const newList = [...sortedList];
    newList[i] = randomNumber;

    if (!listIsSorted(newList)) {
      // enqueueSnackbar("You can't put that there!", {
      //   variant: "error",
      // });
      console.log("You can't do that!");
      return;
    }

    //new list with updated button is acceptable
    setSortedList(newList);
    createNewRandomNumber();
  };

  return (
    <>
      <SnackbarProvider />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Typography variant="h1">{randomNumber}</Typography>
        </Grid>
        <Grid item>
          <ButtonField
            randomNumber={randomNumber}
            sortedList={sortedList}
            onPlay={handlePlay}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={() =>
              enqueueSnackbar("You can't put that there!", {
                variant: "error",
              })
            }
          >
            Click Me!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
