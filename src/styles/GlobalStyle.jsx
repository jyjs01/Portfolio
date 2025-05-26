// src/styles/GlobalStyle.jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    font-family: 'Be Vietnam Pro', sans-serif;
    color: #333;
    line-height: 1.6;
  }
`;


export default GlobalStyle;
