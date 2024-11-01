import styled from "styled-components";
import Input from "./Input";
import CheckBox from "./CheckBox";
import { useState } from "react";
import Form from "./Form";
import Button from "./Button";
const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: minmax(46.3rem, 42%) minmax(30.1rem, 27%) minmax(
      34.69rem,
      31%
    );
  align-items: center;
  background-color: var(--bg-color-2);
  width: 111rem;
  height: 8rem;
  padding: 0 3.2rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function SeachBar() {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  function toggleCheck() {
    setIsChecked(!isChecked);
  }

  return (
    <Form>
      <StyledSearchBar>
        <InputContainer>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.024 15.0588H17.1123L23.9435 21.9037L21.9037 23.9435L15.0588 17.1123V16.0308L14.6824 15.6544C13.1286 16.9891 11.1093 17.7968 8.89842 17.7968C3.98374 17.7968 0 13.8131 0 8.89842C0 3.98374 3.98381 0 8.89842 0C13.813 0 17.7968 3.98374 17.7968 8.89842C17.7968 11.1093 16.9891 13.1286 15.6475 14.6824L16.024 15.0588ZM2.73799 8.89842C2.73799 12.3003 5.49651 15.0588 8.89842 15.0588C12.3003 15.0588 15.0588 12.3003 15.0588 8.89842C15.0588 5.49651 12.3003 2.73799 8.89842 2.73799C5.49651 2.73799 2.73799 5.49651 2.73799 8.89842Z"
              fill="#5964E0"
            />
          </svg>

          <Input placeholder="Enter desired job..." type="text" required />
        </InputContainer>
        <InputContainer>
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.44766 0C10.6803 0 12.7796 0.870546 14.3584 2.45105C17.2802 5.37556 17.6433 10.8781 15.1348 14.2255L8.44766 23.894L1.75053 14.2119C-0.748035 10.8781 -0.384933 5.37556 2.53689 2.45105C4.11571 0.870546 6.21455 0 8.44766 0ZM5.47353 8.29091C5.47353 9.97484 6.84268 11.3455 8.52481 11.3455C10.2069 11.3455 11.5761 9.97484 11.5761 8.29091C11.5761 6.60698 10.2069 5.23636 8.52481 5.23636C6.84268 5.23636 5.47353 6.60698 5.47353 8.29091Z"
              fill="#5964E0"
            />
          </svg>

          <Input placeholder="Country" type="text" />
        </InputContainer>

        <InputContainer>
          <CheckBox
            checked={isChecked}
            onChange={toggleCheck}
            label="Full Time Only"
          />

          <Button type="btn1">Search</Button>
        </InputContainer>
      </StyledSearchBar>
    </Form>
  );
}

export default SeachBar;
