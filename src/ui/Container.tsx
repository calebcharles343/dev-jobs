import styled from "styled-components";
import { StyledContainerProps } from "../Interfaces";

const StyledContainer = styled.main`
  width: 100vh;
  min-width: 144rem;
  height: 100vh;
  background-color: var(--bg-color);
`;

function Container({ children }: StyledContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
