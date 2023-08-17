import { Box, Theme, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text } from 'recharts';
import { useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { database } from '../Firebase';
import { off, onValue, ref } from 'firebase/database';

function formatData(data: any) {
  const formattedData: any[] = [];
  for(let i = 1; i <= 10; i++){
    const freq = {
      score: i,
      frequency: data[i]
    }
    formattedData.push(freq);
  }
  return formattedData;
}

const StatsView = ({data, average, gamesPlayed}: any) => {
  const theme = useTheme() as Theme;
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      
    >
      <Box p={2} m={2}>
        <Typography variant='h3'>Live Global Data</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          width={300}
        >
          <Typography variant='h4'>Average: {average.toFixed(2)}</Typography>
          <Typography variant='h4'>Games Played: {gamesPlayed}</Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <BarChart width={1200} height={600} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="score" label={{ value: 'Score', angle: 0, position: 'bottom', dy: -15 }} />
              <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}/>
              <Tooltip itemStyle={{ color: 'black' }}/>
              <Bar dataKey="frequency" fill={theme.palette.primary.main} />
              <Text x={0} y={20} textAnchor="start" fill="black" fontSize="24px" fontWeight="bold">Average</Text>
              <Text x={0} y={60} textAnchor="start" fill="black" fontSize="24px" fontWeight="bold">Games Played</Text>
            </BarChart>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const Resolver = () => {
  const [stats, setStats] = React.useState(null) as any;

  useEffect(() => {
    const db = database;
    const statsRef = ref(db, 'stats');

    const handleValueChange = (snapshot: any) => {
      console.log(snapshot.val());
      setStats(snapshot.val());
    }
    onValue(statsRef, handleValueChange);

    // Remove the event listener when the component unmounts
    return () => {
      off(statsRef, 'value', handleValueChange);
    };
  }, []);

  if(stats == null){
    return <p>loading...</p>
  }

  console.log(formatData(stats.frequencyDistribution));

  return <StatsView data={formatData(stats.frequencyDistribution)} average={stats.averageScore} gamesPlayed={stats.gamesPlayed}/>;
}

export default Resolver;
