import { ToggleButtonGroup, ToggleButton } from "@mui/material"
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const StatsSelector = () => {
  const uid = localStorage.getItem('user_uid');
  const location = useLocation();
  const useGlobal = location.pathname == '/stats/global';
  const [ID, setID] = React.useState(useGlobal ? 'global': uid)
  const navigate = useNavigate();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    incomingID: string,
    ) => {
      if(incomingID != null){
        navigate(`/stats/${incomingID}`);
        setID(incomingID);
      }
      
    };

  return (
    <ToggleButtonGroup
      color="info"
      value={ID}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      style={{ display: 'flex' }}
    >
      <ToggleButton value="global" style={{ flex: 1, width: '50%' }}> <PublicIcon/> </ToggleButton>
      <ToggleButton value={uid as string} style={{ flex: 1, width: '50%' }}> <AccountCircleIcon/> </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default StatsSelector;