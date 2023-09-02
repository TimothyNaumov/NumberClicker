import { Box } from "@mui/material";
import SocialMediaButtons from "./features/MySocials";
import GameInfo from "./features/GameInfo";
import ViewSwitch from "./features/ViewSwitch";
import { Outlet } from "react-router-dom";
export const AppLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
    >
      <Box position="absolute" top={0} right={0} p={2}>
        <SocialMediaButtons />
      </Box>
      <Box position="absolute" top={0} p={2}>
        <ViewSwitch />
      </Box>
      <Outlet />
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

export default AppLayout;
