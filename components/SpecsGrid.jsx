import React from "react";
import styled from "styled-components";

const SpecsGrid = ({ width = "100%", height = "auto" }) => {
  // Default specs data
  const specs = [
    { name: "Power", value: 40, type: "Bar" },
    { name: "Mileage", value: "21 km/l", type: "Text" },
    { name: "Comfort", value: 80, type: "Bar" },
    { name: "Seats", value: "5", type: "Text" },
    { name: "Safety", value: 10, type: "Bar" },
  ];

  return (
    <GridContainer width={width} height={height}>
      {specs.map((spec, index) => (
        <Cell key={index}>
          <Name>{spec.name}</Name>
          {spec.type === "Bar" ? (
            <ProgressBarWrapper>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{
                    width: `${spec.value}%`,
                    backgroundColor: getProgressBarColor(spec.value),
                  }}
                  aria-valuenow={spec.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </ProgressBarWrapper>
          ) : (
            <TextValue>{spec.value}</TextValue>
          )}
        </Cell>
      ))}
    </GridContainer>
  );
};

// Helper to determine the progress bar color based on value
const getProgressBarColor = (value) => {
  if (value < 33) return "#ff073a"; // neon-red
  if (value < 66) return "#ffdd00"; // neon-yellow
  return "#39ff14"; // neon-green
};

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background: #141414;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: auto;
`;

const Cell = styled.div`
  padding: 10px;
  background: #1f1f1f;
  border-radius: 8px;
  box-shadow: 0 0 10px #00f0ff;
  color: #00f0ff;
  text-align: center;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #0ff;
  margin-bottom: 10px;
`;

const ProgressBarWrapper = styled.div`
  .progress {
    background-color: #333;
    border-radius: 5px;
    height: 10px; /* Reduced height */
    overflow: hidden;
  }
  .progress-bar {
    font-weight: bold;
    text-shadow: 0 0 5px #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

const TextValue = styled.div`
  font-size: 16px;
  color: #0f0;
  text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
`;

export default SpecsGrid;
