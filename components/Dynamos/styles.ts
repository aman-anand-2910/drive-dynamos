import styled from "styled-components";

// Wrapper to contain the video and overlay content
export const PageWrapper = styled.div<{ isZoomed: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: ${({ isZoomed }) => (isZoomed ? "scale(1.2)" : "scale(1)")};
  transition: transform 0.5s ease-in-out;
`;

// Full-screen background video
export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

// Neon-styled header
export const Header = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff,
    0 0 25px #0ff, 0 0 30px #0ff, 0 0 35px #0ff;
  margin-bottom: 20px;
  animation: flicker 1.5s infinite alternate;
`;

// Neon-styled start button
export const StartButton = styled.button`
  background-color: #0ff;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff,
    0 0 25px #0ff, 0 0 30px #0ff, 0 0 35px #0ff;

  &:hover {
    background-color: #0cc;
    transform: scale(1.1);
    box-shadow: 0 0 10px #0cc, 0 0 20px #0cc, 0 0 30px #0cc, 0 0 40px #0cc;
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Wrapper for the slider component
export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111a3;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;
  max-width: 600px;
`;
export const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px; /* Space between the slider and the button */
  padding: 20px;
`;
// Header with neon effect
export const HeaderQuestion = styled.h2`
  font-size: 2rem;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
  margin-bottom: 20px;
`;

// Budget value display
export const BudgetValue = styled.div`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 0 5px #fff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
`;

// Neon slider
export const Slider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  background: #444;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #0ff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
    transition: transform 0.2s ease-in-out;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #0ff;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
    transition: transform 0.2s ease-in-out;
  }

  &::-moz-range-thumb:hover {
    transform: scale(1.2);
  }
`;

export const NeonNextButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: "Arial", sans-serif;
  font-size: 1.5rem;
  color: #0ff; /* Neon blue text */
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f, 0 0 30px #00f;
  background: linear-gradient(90deg, #002244, #001122);
  border: 2px solid #0ff;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 10px #0ff, 0 0 20px #00f, 0 0 40px #00f;
  margin: 50px;
  &:hover {
    color: #fff;
    text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
    box-shadow: 0 0 15px #0ff, 0 0 30px #00f, 0 0 50px #00f;
  }
`;

export const LeftArrow = styled.span`
  margin: 0 10px;
  font-weight: bold;
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f, 0 0 30px #00f;
  transition: transform 0.3s ease-in-out;

  ${NeonNextButton}:hover & {
    transform: translateX(-5px); /* Slide the arrow on hover */
  }
`;
export const RightArrow = styled.span`
  margin: 0 10px;
  font-weight: bold;
  color: #0ff;
  text-shadow: 0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #00f, 0 0 30px #00f;
  transition: transform 0.3s ease-in-out;

  ${NeonNextButton}:hover & {
    transform: translateX(5px); /* Slide the arrow on hover */
  }
`;


export const NeonCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 65%;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  border: 2px solid #0ff; /* Neon border */
  border-radius: 15px;
  box-shadow: 0 0 15px #0ff, 0 0 30px #0ff;
`;

export const NeonImageContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const NeonImage = styled.img<{ scale?: boolean }>`
  width: 100%;
  height: auto;
  max-height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px #0ff;
  transform: ${({ scale }) => (scale ? "scale(3)" : "scale(0.8)")};
`;

export const NeonButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 2px solid #0ff;
  color: #0ff;
  font-size: 18px;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #0ff;
    color: black;
    box-shadow: 0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff;
  }
`;

export const NeonPrevButtonArr = styled(NeonButton)`
  left: 10px;
`;

export const NeonNextButtonArr = styled(NeonButton)`
  right: 10px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;