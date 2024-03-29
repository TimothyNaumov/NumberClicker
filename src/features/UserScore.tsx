import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { database } from "../Firebase";
import { ref, onValue, off } from "firebase/database";
import React from "react";
import "../App.css";
import { withUID } from "../hoc/withUID";

function UserScore({ score, deltaScore, ...props }: any) {
  console.log("score, deltaScore", score, deltaScore);
  return (
    <Box
      display="flex"
      flexDirection="row"
      position="relative"
      justifyContent="center"
    >
      <Box minHeight="42">
        {deltaScore > 0 && (
          <Typography
            variant="h6"
            className="floating-points positive"
            key={score}
          >
            +{deltaScore}
          </Typography>
        )}
      </Box>
      <Typography {...props}>{score}</Typography>
      <Box minHeight="42">
        {deltaScore < 0 && (
          <Typography
            variant="h6"
            className="floating-points negative"
            key={score}
          >
            {deltaScore}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

const Resolver = (props: any) => {
  const [score, setScore] = React.useState(null) as any;
  const [deltaScore, setDeltaScore] = React.useState(null) as any;

  useEffect(() => {
    const { uid } = props;

    const db = database;
    const pointsRef = ref(db, `users/${uid}/stats/points`);

    const handleValueChange: any = (snapshot: any) => {
      const newScore = snapshot.val();
      setScore((prevScore: any) => {
        if (prevScore != null) {
          console.log("newScore, prevScore", newScore, prevScore);
          setDeltaScore(newScore - prevScore);
          return newScore;
        }
        return newScore;
      });
    };
    onValue(pointsRef, handleValueChange);

    // Remove the event listener when the component unmounts
    return () => {
      off(pointsRef, "value", handleValueChange);
    };
  }, []);

  if (score == null) {
    return <UserScore score={""} deltaScore={""} {...props} />;
  }

  return <UserScore score={score} deltaScore={deltaScore} {...props} />;
};

const UIDAwareResolver = withUID(Resolver);

export default UIDAwareResolver;
