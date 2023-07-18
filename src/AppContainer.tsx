import { Box } from "@mui/material";
import App from "./App";
import HowToPlay from "./features/HowToPlay";
import SocialMediaButtons from "./features/MySocials";
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
        <HowToPlay />
      </Box>
      <Box>
        <App />
      </Box>
      <Box position="absolute" bottom={0} right={0} p={2}>
        <SocialMediaButtons />
      </Box>
    </Box>
  );
};

export default App;
