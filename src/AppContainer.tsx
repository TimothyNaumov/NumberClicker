import { Box } from "@mui/material";
import App from "./App";
import SocialMediaButtons from "./features/MySocials";
import GameInfo from "./features/GameInfo";
export const AppContainer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* Button at the top right */}
      <Box position="absolute" top={0} right={0} p={2}>
        <SocialMediaButtons />
      </Box>
      <Box>
        <App />
      </Box>
      <Box
        position="absolute"
        bottom={0}
        right={0}
        p={2}
        display="flex"
        flexDirection="row"
      >
        <GameInfo />
      </Box>
    </Box>
  );
};

export default AppContainer;
