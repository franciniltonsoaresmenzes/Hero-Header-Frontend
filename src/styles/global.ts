import { createGlobalStyle } from "styled-components";

import background02 from './../assets/background-2.png'
import background01 from './../assets/background.png'

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
    background: url(${background02}) no-repeat 1010px, url(${background01}) no-repeat 931px;
    background-size: cover;
    background-color: #F8FDFF;
    font-family: 'Poppins', sans-serif;
  }

  button {
    background: none;
    outline: none;
    border: none;
    font-family: 'Poppins', sans-serif;
  }

  a{
    text-decoration: none;
    outline: none;
  }
`;

export default GlobalStyle
