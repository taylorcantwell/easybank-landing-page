import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {

--Dark-Blue: hsl(233, 26%, 24%);
--Lime-Green: hsl(136, 65%, 51%);
--Bright-Cyan: hsl(192, 70%, 51%);

--Grayish-Blue: hsl(233, 8%, 62%);
--Light-Grayish-Blue: hsl(220, 16%, 96%);
--Very-Light-Gray: hsl(0, 0%, 98%);
--White: hsl(0, 0%, 100%);
}

*{
box-sizing: border-box;
margin: 0;
padding: 0;
}

body {
  overflow-x: hidden;
  line-height: 1.6;
  font-family: 'Public Sans', sans-serif;
  color: rgb(173, 174, 180);
}

h1,h2,h3 {
  color: #3e436a;
}

button {
    font-family: 'Public Sans', sans-serif;
}
`;

export default GlobalStyle;
