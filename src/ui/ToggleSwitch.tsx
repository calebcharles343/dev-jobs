import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

interface CircleProps {
  $isDarkMode: string;
}

const StyledSVG = styled.svg`
  width: 4.8rem;
  height: 2.4rem;
`;

const StyledRect = styled.rect`
  width: 4.8rem;
  height: 2.4rem;
  rx: 12;
  fill: white;
`;

const StyledCircle = styled.circle<CircleProps>`
  fill: #5964e0;
  transition: cx 0.3s ease;
  cx: ${(props) => (props.$isDarkMode === "true" ? 36 : 12)};
  cy: 12;
  r: 7;
  fillrule: evenodd;
  cliprule: evenodd;
`;

function ToggleSwitch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledSVG viewBox="0 0 48 24" onClick={toggleDarkMode}>
      <StyledRect />
      <StyledCircle $isDarkMode={isDarkMode ? "true" : "false"} />
    </StyledSVG>
  );
}

export default ToggleSwitch;
