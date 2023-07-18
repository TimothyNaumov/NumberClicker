import { Box } from "@mui/material";
import App from "./App";
import HowToPlay from "./features/HowToPlay";
export const AppContainer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box position="absolute" top={0} right={0} p={2}>
        <HowToPlay />
      </Box>
      <Box>
        <App />
      </Box>
      <Box position="absolute" bottom={0} right={0} p={2}>
        <button>Bottom Right Button</button>
      </Box>
    </Box>
  );
};

export default App;
