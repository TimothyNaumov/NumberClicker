import { Box, Typography } from "@mui/material"

export const StatsBar = ({average, gamesPlayed}: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Typography variant='h5' color='secondary'>Average Score</Typography>
      <Typography variant='h3'>{average.toFixed(2)}</Typography>
      <Typography variant='h5' color='secondary' mt={3}>Games Played</Typography>
      <Typography variant='h3'>{gamesPlayed}</Typography>
    </Box>
  )
}