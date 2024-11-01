import styled, { css } from "styled-components";

interface Buttons {
  ButtonType: "btn1" | "btn2";
}

const Button = styled.button<Buttons>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.984rem;
  width: 14.1rem;
  height: 4.8rem;
  border-radius: 5px;
  padding: 1.6rem 3.95rem;
  border: none;
  color: var(--white);

  ${({ ButtonType }) =>
    ButtonType === "btn1" &&
    css`
      background-color: var(--violet);

      &:hover {
        background-color: var(--light-violet);
      }
    `};
  ${({ ButtonType }) =>
    ButtonType === "btn2" &&
    css`
      background-color: var(--btn2-bg-color);

      &:hover {
        background-color: var(--btn2-bg-hover-color);
      }
    `}
`;

export default Button;
