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
`;

export default Input;
