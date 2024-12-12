import React, { useRef } from "react";
import { Arrow, BtnContainer, NeonNextButton, StartButton } from "../styles";


const NeonButtonWithSound = ({
  showButton,
  handleNextClick,
  handleStartClick,
  handlePrevClick,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const handleButtonClick = () => {
    // Play sound
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }

    // Trigger the respective click function based on condition
    if (typeof handleStartClick === "function") {
      handleStartClick();
    } else {
      handleNextClick();
    }
  };

  const handlePrevButtonClick = () => {
    handlePrevClick();
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/images/buttonClick.mp3"
        preload="auto"
        autoPlay
      />
      {!showButton ? (
        <BtnContainer>
          <NeonNextButton onClick={handlePrevButtonClick}>
            <Arrow>← </Arrow>Prev
          </NeonNextButton>
          <NeonNextButton onClick={handleButtonClick}>
            Next<Arrow>→</Arrow>
          </NeonNextButton>
        </BtnContainer>
      ) : (
        <>
          <StartButton onClick={handleButtonClick}>
            Start
          </StartButton>
        </>
      )}
    </>
  );
};

export default NeonButtonWithSound;
