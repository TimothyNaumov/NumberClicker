import { Grid, Button } from "@mui/material";

const ButtonField = ({ sortedList, onPlay }: any) => {
  console.log(sortedList);

  return (
    <Grid container spacing={2} justifyContent="center">
      {sortedList.map((value: any, index: number) => {
        console.log(sortedList);
        console.log("i" + index);
        return (
          <Grid item key={index}>
            <Button
              disabled={value !== undefined}
              variant="contained"
              color="primary"
              style={{ height: "50px" }}
              onClick={() => onPlay(index)}
            >
              {value}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonField;
