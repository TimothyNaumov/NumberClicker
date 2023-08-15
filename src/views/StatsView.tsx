import { Box, Theme, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useTheme } from '@emotion/react';

const sampleData = [
  { score: 1, frequency: 2 },
  { score: 2, frequency: 1 },
  { score: 3, frequency: 2 },
  { score: 4, frequency: 2 },
  { score: 5, frequency: 7 },
  { score: 6, frequency: 4 },
  { score: 7, frequency: 7 },
  { score: 8, frequency: 2 },
  { score: 9, frequency: 6 },
  { score: 10, frequency: 0 },
];

const StatsView = ({data}: any) => {
  const theme = useTheme() as Theme;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant='h3'>8/15/2024 Snapshot</Typography>
      </Box>
      <Box>
        <BarChart width={1200} height={600} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="score" label={{ value: 'Score', angle: 0, position: 'bottom', dy: -15 }} />
          <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}/>
          <Tooltip itemStyle={{ color: 'black' }}/>
          <Bar dataKey="frequency" fill={theme.palette.primary.main} />
        </BarChart>
      </Box>
    </Box>
  );
};

const Resolver = () => {
  return <StatsView data={sampleData}/>;
}

export default Resolver;
