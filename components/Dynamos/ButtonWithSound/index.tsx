import React, { useRef } from "react";
import { Arrow, BtnContainer, NeonNextButton, StartButton } from "../styles";


const NeonButtonWithSound = ({
  showButton,
  handleNextClick,
  handleStartClick,
  handlePrevClick,
  flag=false,
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
        src="../../assets/images/buttonClick.mp3"
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
        <div
          style={{
            margin: flag ? "0px" : "40px",
          }}
        >
          <StartButton onClick={handleButtonClick}>
            {flag ? "Customize Your Car" : "Buy New Car"}
          </StartButton>
        </div>
      )}
    </>
  );
};

export default NeonButtonWithSound;
