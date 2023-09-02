import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { database } from "../../Firebase";
import { get, off, onValue, ref } from "firebase/database";
import StatsGraph from "./StatsGraph";
import { StatsBar } from "./StatsBar";
import StatsSelector from "./StatsSelector";
import { useParams } from "react-router-dom";
import DataNotFoundGraph from "./DataNotFoundGraph";
import { getWinRate } from "../../utils/score.utils";

function formatData(data: any) {
  const formattedData: any[] = [];
  for (let i = 1; i <= 10; i++) {
    const freq = {
      score: i,
      frequency: data[i],
    };
    formattedData.push(freq);
  }
  return formattedData;
}

const StatsView = (props: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        mb={3}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Real Time Statistics
        </Typography>
        <StatsSelector />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <StatsBar winRate={"100%"} {...props} />
        {props.data ? <StatsGraph {...props} /> : <DataNotFoundGraph />}
      </Box>
    </Box>
  );
};

const Resolver = () => {
  const [stats, setStats] = React.useState(null) as any;
  const [error, setError] = React.useState(false);
  const { uid } = useParams();

  useEffect(() => {
    const db = database;
    let statsRef = ref(db, "stats");
    if (uid != "global") {
      statsRef = ref(db, `users/${uid}/stats`);
    }

    get(statsRef)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          setError(true);
        } else {
          setError(false);
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
        setError(true);
      });

    const handleValueChange = (snapshot: any) => {
      setStats(snapshot.val());
    };
    onValue(statsRef, handleValueChange);

    // Remove the event listener when the component unmounts
    return () => {
      off(statsRef, "value", handleValueChange);
    };
  }, [uid]);

  if (!stats || error || !stats.frequencyDistribution) {
    return <StatsView average={0} gamesPlayed={0} />;
  }

  return (
    <StatsView
      data={formatData(stats.frequencyDistribution)}
      average={stats.averageScore}
      gamesPlayed={stats.gamesPlayed}
      winRate={getWinRate(stats)}
    />
  );
};

export default Resolver;
