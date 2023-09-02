import { useTheme } from "@emotion/react";
import { Box, Theme, Typography } from "@mui/material";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"

const data = [
  {
    "score": 1,
    "frequency": 7
  },
  {
    "score": 2,
    "frequency": 20
  },
  {
    "score": 3,
    "frequency": 52
  },
  {
    "score": 4,
    "frequency": 101
  },
  {
    "score": 5,
    "frequency": 168
  },
  {
    "score": 6,
    "frequency": 236
  },
  {
    "score": 7,
    "frequency": 276
  },
  {
    "score": 8,
    "frequency": 260
  },
  {
    "score": 9,
    "frequency": 202
  },
  {
    "score": 10,
    "frequency": 128
  }
]

export const DataNotFoundGraph = () => {
  const theme = useTheme() as Theme;

  return (
    <Box position='relative' >
      <Box sx={{filter: 'blur(5px)'}}>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="score" label={{ value: 'Score', angle: 0, position: 'bottom', dy: -15 }} />
        <YAxis/>
        <Tooltip itemStyle={{ color: 'black' }}/>
        <Bar dataKey="frequency" fill={theme.palette.primary.main} />
      </BarChart>
      </Box>
      <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" color="textSecondary">
            No Data Found
          </Typography>
        </Box>
    </Box>
  )
}

export default DataNotFoundGraph;