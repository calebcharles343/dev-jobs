import styled from "styled-components";
import { StyledContainerProps } from "../Interfaces";

const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  padding-bottom: 11.2rem;

  @media (max-width: 769px) {
    width: 100%;
    min-width: 7.68rem;
  }
`;

function Main({ children }: StyledContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Main;
