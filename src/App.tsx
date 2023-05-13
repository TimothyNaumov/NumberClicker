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

function checkGameOver(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "undefined") {
      return false;
    }
  }
  return true;
}

function App() {
  const [randomNumber, setRandomNumber] = React.useState(
    randomNumberInRange(1, 100)
  );
  const [usedRandomNumbers, setUsedRandomNumbers] = React.useState([
    randomNumber,
  ]);
  const [sortedList, setSortedList] = React.useState(Array(10).fill(undefined));

  const createNewRandomNumber = () => {
    let newRandomNumber = randomNumberInRange(1, 100);
    //keep generating new random numbers until we get one that hasn't been used yet
    while (usedRandomNumbers.includes(newRandomNumber)) {
      newRandomNumber = randomNumberInRange(1, 100);
    }
    setRandomNumber(newRandomNumber);
    setUsedRandomNumbers([...usedRandomNumbers, newRandomNumber]);
  };

  const handlePlay = (i: number) => {
    const newList = [...sortedList];
    newList[i] = randomNumber;

    if (!listIsSorted(newList)) {
      console.log("You can't do that!");
      return;
    }

    if (checkGameOver(newList)) {
      enqueueSnackbar("You win!", {
        variant: "success",
      });
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
        {/* <Grid item>
          <Button
            onClick={() =>
              enqueueSnackbar("You can't put that there!", {
                variant: "error",
              })
            }
          >
            Click Me!
          </Button>
        </Grid> */}
      </Grid>
    </>
  );
}

export default App;
