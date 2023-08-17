import { Box, Theme, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Text } from 'recharts';
import { useTheme } from '@emotion/react';
import React, { useEffect } from 'react';
import { database } from '../../Firebase';
import { off, onValue, ref } from 'firebase/database';
import StatsGraph from './StatsGraph';
import { StatsBar } from './StatsBar';

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

const StatsView = (props: any) => {
  const theme = useTheme() as Theme;
  
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Box p={2} m={2}>
        <Typography variant='h3' sx={{ fontWeight: 'bold' }}>Real Time Statistics</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <StatsBar {...props}/>
        <StatsGraph {...props}/>
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
