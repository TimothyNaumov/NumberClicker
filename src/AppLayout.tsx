import { Box } from "@mui/material";
import SocialMediaButtons from "./features/MySocials";
import GameInfo from "./features/GameInfo";
import ViewSwitch from "./features/ViewSwitch";
import { Outlet } from "react-router-dom";
import UserScore from "./features/UserScore";
export const AppLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="60vh"
    >
      <Box position="absolute" top={25} left={50} p={2}></Box>
      <Box position="absolute" top={0} right={0} p={2}>
        <SocialMediaButtons />
      </Box>
      <Box
        position="absolute"
        top={0}
        p={2}
        display="flex"
        flexDirection="column"
      >
        <ViewSwitch />
        <Box
          border={1}
          borderRadius={0}
          borderTop={0}
          sx={{
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
            border: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <UserScore color="primary" variant="h4" />
        </Box>
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
