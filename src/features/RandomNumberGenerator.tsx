import React from "react";
import { Grid, Typography } from "@mui/material";

function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = React.useState(
    randomNumberInRange(1, 100)
  );

  const createNewRandomNumber = () => {
    setRandomNumber(randomNumberInRange(1, 100));
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Typography variant="h1">{randomNumber}</Typography>
      </Grid>
    </Grid>
  );
};

export default RandomNumberGenerator;
