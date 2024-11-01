import { ChangeEvent } from "react";
import styled from "styled-components";
import { SelectT } from "../Interfaces";

interface StyledSelectT {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const StyledSelect = styled.select<StyledSelectT>`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  background-color: inherit;
`;

function Select({ options, value, onChange, type }: SelectT) {
  return (
    <StyledSelect value={value} onChange={onChange} type={type}>
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
