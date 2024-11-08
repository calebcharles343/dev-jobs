import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  background-color: inherit;
  /* height: 100%; */
  border: none;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    overflow: hidden;
  }
`;

export default Label;
