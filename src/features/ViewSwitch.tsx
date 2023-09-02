import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CasinoIcon from "@mui/icons-material/Casino";
export const ViewSwitch = () => {
  const location = useLocation();
  const useStatsView = location.pathname.startsWith("/stats");
  const [view, setView] = React.useState(useStatsView ? "/stats/global" : "/");
  const navigate = useNavigate();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string
  ) => {
    if (newView != null) {
      navigate(newView);
      setView(newView);
    }
  };

  // style={{ flex: 1, width: "50%" }}

  return (
    <ToggleButtonGroup
      color="info"
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      style={{ display: "flex" }}
    >
      <ToggleButton value="/">
        <CasinoIcon />
      </ToggleButton>
      <ToggleButton value="/stats/global">
        <QueryStatsIcon />
      </ToggleButton>
      <ToggleButton value="/stats/leaderboards">
        <LeaderboardIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewSwitch;
