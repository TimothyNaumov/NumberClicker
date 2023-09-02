import { Box, Button, Typography } from "@mui/material";

export const DealMeIn = ({ onClick }: any) => {
  return (
    <Box>
      <Typography variant="h1" mb={5}>
        Number Clicker
      </Typography>
      <Button onClick={onClick} variant="contained">
        Deal Me In
      </Button>
    </Box>
  );
};

export default DealMeIn;
