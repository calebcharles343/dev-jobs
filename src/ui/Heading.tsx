import styled, { css } from "styled-components";
import media from "../styles/MediaQuery";

interface HeadingProps {
  headingType?: "h1" | "h2" | "h3" | "h4" | "h1-mobile";
  color?: string;
}

const Heading = styled.h1<HeadingProps>`
  font-weight: 700;
  ${({ color }) =>
    color &&
    css`
      color: var(${color});
    `};

  ${({ headingType }) =>
    headingType === "h1" &&
    css`
      font-size: 2.8rem;
      line-height: 3.4rem;
    `};

  ${({ headingType }) =>
    headingType === "h2" &&
    css`
      font-size: 2.4rem;
      line-height: 2.9rem;
    `};

  ${({ headingType }) =>
    headingType === "h3" &&
    css`
      font-size: 2rem;
      line-height: 2.4rem;
    `};

  ${({ headingType }) =>
    headingType === "h4" &&
    css`
      font-size: 1.4rem;
      line-height: 1.8rem;
    `};
  ${({ headingType }) =>
    headingType === "h1-mobile" &&
    css`
      font-size: 2.8rem;
      line-height: 3.4rem;

      ${media.mobile} {
        font-size: 2rem;
      }
    `};
`;

export default Heading;
