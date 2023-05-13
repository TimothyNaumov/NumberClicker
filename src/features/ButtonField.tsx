import { Grid, Button } from "@mui/material";

const ButtonField = ({ sortedList, onPlay }: any) => {
  console.log(sortedList);
  //{pressed ? "secondary" : "primary"}
  return (
    <Grid container spacing={2} justifyContent="center">
      {sortedList.map((value: any, index: number) => {
        const pressed = value !== undefined;
        return (
          <Grid item key={index}>
            <Button
              disabled={pressed}
              variant="contained"
              color="primary"
              sx={{
                "&.Mui-disabled": {
                  background: "#8fe88e",
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
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
