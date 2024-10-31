import React, { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  isToggled: boolean;
}

const StyledSVG = styled.svg`
  width: 48px;
  height: 24px;
`;

const StyledRect = styled.rect`
  width: 48px;
  height: 24px;
  rx: 12;
  fill: white;
`;

const StyledCircle = styled.circle<CircleProps>`
  fill: #5964e0;
  transition: cx 0.3s ease;
  cx: ${(props) => (props.isToggled ? 36 : 12)};
  cy: 12;
  r: 7;
`;

function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <StyledSVG viewBox="0 0 48 24" onClick={handleToggle}>
      <StyledRect />
      <StyledCircle isToggled={isToggled} />
    </StyledSVG>
  );
}

export default ToggleSwitch;
