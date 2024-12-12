import React from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for spinning animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled loader container
const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Fullscreen loader */
  background-color: #000; /* Dark background for neon effect */
`;

// Neon ring style
const NeonRing = styled.div`
  width: 80px;
  height: 80px;
  border: 5px solid transparent;
  border-top: 5px solid #0ff; /* Neon cyan */
  border-right: 5px solid #f0f; /* Neon magenta */
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #f0f, 0 0 40px #f0f;
`;

// Loader text for additional effect
const LoaderText = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 25px #0ff;
  animation: ${spin} 3s linear infinite;
`;

const NeonLoader = () => {
  return (
    <LoaderContainer>
      <div>
        <NeonRing />
      </div>
    </LoaderContainer>
  );
};

export default NeonLoader;
