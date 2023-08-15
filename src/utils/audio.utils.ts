// Function to handle interruptions and play the audio.
export const playSoundWithInterruption = (sound: any, volume: number) => {
  sound.volume = volume;
  if (!sound.paused) {
    // If the sound is already playing, pause it to allow interruption.
    sound.pause();
    sound.currentTime = 0; // Reset the audio to the beginning.
  }
  sound.play();
};
