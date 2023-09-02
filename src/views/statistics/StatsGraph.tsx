import { useTheme } from "@emotion/react";
import { Box, Theme } from "@mui/material";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from "recharts"

export const StatsGraph = ({data}: any) => {
  const theme = useTheme() as Theme;

  return (
    <Box>
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="score" label={{ value: 'Score', angle: 0, position: 'bottom', dy: -15 }} />
        <YAxis/>
        <Tooltip itemStyle={{ color: 'black' }}/>
        <Bar dataKey="frequency" fill={theme.palette.primary.main} />
      </BarChart>
    </Box>
  )
}

export default StatsGraph;