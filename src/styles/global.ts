import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: #f8fdff;
    font-family: 'Poppins', sans-serif;
    color: #1e255e;
  }

  button {
    background: none;
    outline: none;
    font-family: 'Poppins', sans-serif;
  }

  a{
    text-decoration: none;
    outline: none;
  }
`;

export default GlobalStyle
