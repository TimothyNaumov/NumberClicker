import { Grid, Button } from "@mui/material";

const ButtonField = ({ gameState }: any) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {gameState.sortedList.map((value: any, index: number) => {
        const pressed = value !== undefined;
        const disabled = gameState.disabledList[index] || pressed;
        const backgroundColor = gameState.disabledList[index]
          ? "#ba4343"
          : "#8fe88e";
        return (
          <Grid item key={index}>
            <Button
              disabled={disabled}
              variant="contained"
              color={gameState.disabledList[index] ? "error" : "primary"}
              sx={{
                "&.Mui-disabled": {
                  background: backgroundColor,
                  color: "rgba(0, 0, 0, 0.6)",
                },
              }}
              style={{ height: "50px" }}
              onClick={() => gameState.spaceSelected(index)}
            >
              {gameState.sortedList[index]}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonField;
