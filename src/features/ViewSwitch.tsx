import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const ViewSwitch = () => {
    const location = useLocation();
    const useStatsView = location.pathname.startsWith('/stats');
    const [view, setView] = React.useState(useStatsView ? '/stats/global' : "/");
    const navigate = useNavigate();
    
    const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newView: string,
    ) => {
        if(newView != null){
            navigate(newView);
            setView(newView);
        }
    };

  return (
    <ToggleButtonGroup
      color="info"
      value={view}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      style={{ display: 'flex' }}
    >
      <ToggleButton value="/" style={{ flex: 1, width: '50%' }}>play</ToggleButton>
      <ToggleButton value="/stats/global" style={{ flex: 1, width: '50%' }}>stats</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ViewSwitch;