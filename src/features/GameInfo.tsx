import { Box } from "@mui/material";
import HowToPlay from "./HowToPlay";
import AudioSlider from "./AudioSlider";
export const GameInfo = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <AudioSlider />
      <HowToPlay />
    </Box>
  );
};

export default GameInfo;
