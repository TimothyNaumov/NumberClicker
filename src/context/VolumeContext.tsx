// VolumeContext.tsx
import React, { createContext, useState, useEffect } from "react";

interface VolumeContextType {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VolumeContext = createContext<VolumeContextType>({
  volume: 0.5,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setVolume: () => {},
});

interface VolumeProviderProps {
  children: React.ReactNode;
}

const VolumeProvider: React.FC<VolumeProviderProps> = ({ children }) => {
  const [volume, setVolume] = useState(() => {
    // Retrieve volume from local storage on initial load
    const storedVolume = localStorage.getItem("volume");
    return storedVolume ? parseFloat(storedVolume) : 0.5;
  });

  useEffect(() => {
    // Save volume to local storage whenever it changes
    localStorage.setItem("volume", volume.toString());
    console.log("Volume changed to: " + volume);
  }, [volume]);

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};

export { VolumeContext, VolumeProvider };
