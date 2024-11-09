import styled, { css } from "styled-components";
interface InputT {
  width?: string;
  height?: string;
}
const Input = styled.input<Partial<InputT>>`
  font-size: 1.8rem;
  font-weight: 600;
  background-color: inherit;
  height: 100%;
  border: none;
  width: 100%;
  box-shadow: var(--shadow-sm);
  padding-left: 0.5rem;
  ${({ width }) =>
    width === "medium" &&
    css`
      width: 260px;
    `}

  ${({ type }) =>
    type === "checkbox" &&
    css`
      display: inline-block;
      width: 2.4rem;
      height: 2.4rem;

      &:after {
        background-color: #5964e0;
        color: #5964e0;
      }
    `}

    &:-webkit-autofill {
    /* -webkit-box-shadow: 0 0 0px 1000px white inset;  */
    box-shadow: 0 0 0px 1000px var(--bg-color-2) inset; /* Fallback shadow for non-WebKit browsers */
    -webkit-text-fill-color: var(
      --header-color
    ); /* Keeps the original font color */
    background-color: transparent !important; /* Ensures no added background */
  }
`;

export default Input;
