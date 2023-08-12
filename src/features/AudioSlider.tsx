import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeOff from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { VolumeContext } from "../context/VolumeContext";

const AudioControl: React.FC = () => {
  //const [localVolume, setLocalVolume] = React.useState<number>(30);
  const [showSlider, setShowSlider] = React.useState<boolean>(false);
  const { volume, setVolume } = React.useContext(VolumeContext);

  const handleButtonClick = () => {
    setShowSlider(!showSlider);
  };

  const handleVolumeChange = (event: Event, newValue: number | number[]) => {
    setVolume((newValue as number) / 100);
  };

  const handleClickAway = () => {
    setShowSlider(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Stack spacing={2} direction="column" alignItems="center">
        {showSlider && (
          <Box sx={{ height: 100 }}>
            <Slider
              orientation="vertical"
              value={volume * 100}
              onChange={handleVolumeChange}
              aria-labelledby="volume-slider"
            />
          </Box>
        )}
        <IconButton onClick={handleButtonClick} sx={{ padding: "6px" }}>
          {volume === 0 ? (
            <VolumeOff sx={{ fontSize: 30 }} />
          ) : (
            <VolumeUp sx={{ fontSize: 30 }} />
          )}
        </IconButton>
      </Stack>
    </ClickAwayListener>
  );
};

export default AudioControl;
