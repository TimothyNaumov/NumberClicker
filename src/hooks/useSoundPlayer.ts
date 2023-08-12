// useSoundPlayer.ts
import { useContext } from "react";
import { VolumeContext } from "../context/VolumeContext";

const useSoundPlayer = (sound: any) => {
  const { volume } = useContext(VolumeContext);

  const playSoundWithInterruption = () => {
    sound.volume = volume;

    if (!sound.paused) {
      sound.pause();
      sound.currentTime = 0;
    }

    sound.play();
  };

  return { playSoundWithInterruption };
};

export default useSoundPlayer;
