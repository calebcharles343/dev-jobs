import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`:root {


 &, &.light-mode{ 
  --body-bg:#e7e8e9;
  --bg-color:#f4f6f8;
  --bg-color-2:#ffffff;
  --header-color: #19202d;

  --btn2-bg-color: rgba(89, 100, 224, 0.1); 
  --btn2-bg-hover-color: rgba(89, 100, 224, 0.35); 
  --btn2-font-color: #5964e0;
  
  --image-grayscale: 0;
  --image-opacity: 100%;
  
  --job-bg-color: #ffffff;
  
}
&.dark-mode{
  --body-bg:#B8B9BC;
  --bg-color: #181c28;
  --bg-color-2:#19202d;
  
  --header-color: #ffffff;
  
  --btn2-bg-color: rgba(255, 255, 255, 0.1);
  --btn2-bg-hover-color:  rgba(255, 255, 255, 0.35);
  --btn2-font-color: #ffffff;

  --job-bg-color: #19202d;


--image-grayscale: 10%;
--image-opacity: 90%;
  }

  --font-color: #6e8098;

--violet: #5964e0;
--light-violet: #939bf4;
--very-dark-blue: #19202d;
--midnight: #121721;
--white: #ffffff;
--light-grey: #f4f6f8;
--grey: #9daec2;
--dark-grey: #6e8098;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.2s, border 0.2s;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Kumbh Sans", sans-serif;
  line-height: 2.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: var(--body-bg);
  color: var(--dark-grey);
  
  /* Only works if ther is nothing 
  absolutely positioned in relations to body  */
  overflow-x: hidden;
  overflow-y: scroll;

}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  /* outline: 2px solid var(--grey); */
   outline:none;
  /* outline-offset: -1px; */
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
input::placeholder {
  /* letter-spacing: 0.4rem; */
 
  opacity: 0.7;
}
`;

export default GlobalStyles;
